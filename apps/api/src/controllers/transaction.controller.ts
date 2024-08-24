import { responseError } from '@/helpers/responseError';
import prisma from '@/prisma';
import axios from 'axios';
import { Request, Response } from 'express';
import { log } from 'handlebars';

export class TransactionController {
  async createTransaction(req: Request, res: Response) {
    try {
      const { price, quantity, totalDiscount, eventId } = req.body;
      const user = await prisma.user.findFirst({
        where: { id: req.user?.id },
      });
      let finalPrice = req.body.finalPrice;
      const point = user?.point;
      const usePoint = req.body.usePoint || 0;
      if (usePoint % 10000 !== 0) throw 'point harus kelipatan 10000';
      if (point) {
        if (usePoint > point) throw 'point kurang';
        finalPrice -= usePoint;
      }
      await prisma.$transaction(async (tx) => {
        const transaction = await tx.transaction.create({
          data: {
            price,
            quantity,
            totalDiscount,
            finalPrice,
            paymentLink: '',
            userId: req.user?.id!,
            eventId,
          },
        });
        await tx.event.update({
          data: { seats: { decrement: quantity } },
          where: { id: eventId },
        });
        const data = {
          transaction_details: {
            order_id: transaction.id,
            gross_amount: transaction.finalPrice,
          },
          expiry: {
            unit: 'minutes',
            duration: 5,
          },
        };
        const midtrans = await axios.post(
          'https://app.sandbox.midtrans.com/snap/v1/transactions',
          data,
          {
            headers: {
              Authorization:
                'Basic U0ItTWlkLXNlcnZlci1fZzVBbHYtSVBOMGRnUVpyRHJvNUlreEo6',
            },
          },
        );
        const midtransData = midtrans.data;

        await tx.transaction.update({
          data: {
            paymentLink: midtransData?.redirect_url,
          },
          where: {
            id: transaction.id,
          },
        });

        return res.status(201).send({
          status: 'OK',
          msg: ' Transaction created',
          transaction,
          data: midtrans.data,
        });
      });
    } catch (error) {
      responseError(res, error);
    }
  }
  async updateStatusTrans(req: Request, res: Response) {
    try {
      const { transaction_status, order_id } = req.body;
      // console.log(req.body);

      if (transaction_status == 'settlement') {
        await prisma.transaction.update({
          data: { status: 'paid' },
          where: { id: +order_id },
        });
      }
      if (transaction_status == 'cancel') {
        await prisma.transaction.update({
          data: { status: 'cancel' },
          where: { id: +order_id },
        });
        const data = await prisma.transaction.findFirst({
          where: { id: +order_id },
        });
        await prisma.event.update({
          data: { seats: { increment: data?.quantity } },
          where: { id: req.body.eventId },
        });
      }
      if (transaction_status == 'expire') {
        await prisma.transaction.update({
          data: { status: 'cancel' },
          where: { id: +order_id },
        });
      }

      return res.status(200).send({
        status: 'OK',
        msg: 'transaction updated',
      });
    } catch (error) {
      responseError(res, error);
    }
  }
}
