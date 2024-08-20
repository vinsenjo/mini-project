import { responseError } from '@/helpers/responseError';
import prisma from '@/prisma';
import axios from 'axios';
import { Request, Response } from 'express';

export class TransactionController {
  async createTransaction(req: Request, res: Response) {
    try {
      const { price, quantity, totalDiscount, eventId, finalPrice } = req.body;
      const transaction = await prisma.transaction.create({
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
      const midtransData = midtrans.data

      await prisma.transaction.update({
        data:{
            paymentLink:midtransData?.redirect_url
        }, where:{
            id:transaction.id
        }
      })
      return res.status(201).send({
        status: 'OK',
        msg: ' Transaction created',
        transaction,
        data: midtrans.data,
      });
    } catch (error) {
      responseError(res, error);
    }
  }
}
