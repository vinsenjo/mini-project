import { responseError } from '@/helpers/responseError';
import prisma from '@/prisma';
import { Request, Response } from 'express';

export class EventController {
  async createEvent(req: Request, res: Response) {
    try {
      const eventName = await prisma.event.findFirst({
        where: { name: req.body.name },
      });
      const date = new Date(req.body.date);
      const price = parseFloat(req.body.price);
      // const organizerId = await pri 
      if (eventName?.name) throw 'event name has been used';
      await prisma.event.create({
        data: {
          ...req.body,
          date,
          price,
        },
      });
    } catch (error) {
      responseError(res, error);
    }
  }
  async getEvent(req: Request, res: Response) {
    try {
      const event = await prisma.event.findMany()
      res.status(200).send({
        status: "ok",
        event
      })
    } catch (error) {
      res.status(400).send({
        status: "Failed",
        msg: error
      })
    }
  }
  async getEventId(req:Request, res:Response){
    try {
      // const event = await prisma.event.findUnique()

    } catch (error) {
      
    }
  }
}
