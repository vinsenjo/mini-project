import { responseError } from '@/helpers/responseError';
import prisma from '@/prisma';
import { Request, Response } from 'express';

const base_url = process.env.BASE_URL || 'http://localhost:8000/api';

export class EventController {
  async createEvent(req: Request, res: Response) {
    try {
      let media = null;
      if (req.file) {
        media = `${base_url}/public/eventImg/${req.file?.filename}`;
        console.log(media);
        
      }
      const eventName = await prisma.event.findFirst({
        where: { name: req.body.name },
      });
      const date = new Date(req.body.date);
      const price = parseFloat(req.body.price);
      const seats = parseInt(req.body.seats);
      if (eventName?.name) throw 'event name has been used';

      await prisma.event.create({
        data: {
          ...req.body,
          seats,
          date,
          price,
          eOId: req.eo?.id!,
          image: media,
        },
      });
      res.status(200).send({
        status: 'ok',
        msg: 'event created',
      });
    } catch (error) {
      responseError(res, error);
    }
  }
  async getEvent(req: Request, res: Response) {
    try {
      let { q: query, category, page, limit } = req.query;
      if (query) {
        if (typeof query !== 'string') throw 'Invalid Request';
        if (typeof category !== 'string') throw 'Invalid request';
        if (typeof page !== 'string' || isNaN(+page)) page = '1';
        if (typeof limit !== 'string' || isNaN(+limit)) limit = '8';
      }
      const event = await prisma.event.findMany({
        orderBy: [{ id: 'desc' }],
      });
      res.status(200).send({
        status: 'ok',
        event,
      });
    } catch (error) {
      responseError(res, error);
    }
  }
  async getEventById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const event = await prisma.event.findUnique({
        where: { id: +id },
      });
      res.status(200).json(event);
    } catch (error) {
      responseError(res, error);
    }
  }
}
