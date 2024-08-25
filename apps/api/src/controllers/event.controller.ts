import { responseError } from '@/helpers/responseError';
import prisma from '@/prisma';
import { Request, Response } from 'express';

const base_url = process.env.BASE_URL || 'http://localhost:8000/api';
const PAGE_SIZE = 3;

export class EventController {
  async createEvent(req: Request, res: Response) {
    try {
      let media = null;
      if (req.file) {
        media = `${base_url}/public/eventImg/${req.file?.filename}`;
        // console.log(media);
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
          eOId: req.user?.id!,
          image: media,
        },
      });
      res.status(200).send({
        status: 'ok',
        msg: 'event created',
      });
    } catch (error) {
      console.log(error);

      responseError(res, error);
    }
  }
  async getEvent(req: Request, res: Response) {
    try {
      type ICategory = 'anime' | 'music' | 'game' | 'sport';
      type IFilter = { AND: any[] };

      const limit = 8;
      const page = req.query.page;
      const pages: number = page ? +page : 1;
      const search = req.query.search || '';
      const category = req.query.category || '';
      const location = req.query.location || '';

      const filter: IFilter = {
        AND: [{ name: { contains: search as string } }],
      };
      if (category) {
        filter.AND.push({ category: category as ICategory });
      }
      if (location) {
        filter.AND.push({ location: location as ICategory });
      }
      

      const event = await prisma.event.findMany({
        orderBy: [{ id: 'desc' }],
        where: filter,
        skip: limit * (pages - 1),
        take: limit,
      });
      const eventAll = await prisma.event.findMany({});

      res.status(200).send({
        status: 'ok',
        event,
        eventAll
       
      });
     
    } catch (error) {
      console.log(error);
      responseError(res, error);
    }
  }
  async getEventById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const event = await prisma.event.findUnique({
        where: { id: +id },
      });
      res.status(200).send({
        status: 'OK',
        data: event,
      });
    } catch (error) {
      responseError(res, error);
    }
  }
  async getEventByEo(req: Request, res: Response) {
    try {
      const data = await prisma.event.findMany({
        where: { eOId: req.user?.id },
      });
      res.status(200).send({
        status: 'OK',
        data,
      });
    } catch (error) {
      responseError(res, error);
    }
  }
}
