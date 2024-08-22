import { responseError } from '@/helpers/responseError';
import prisma from '@/prisma';
import { Request, Response } from 'express';

export class ReviewController {
  async createReview(req: Request, res: Response) {
    try {
      const { review, ratings, eventId } = req.body;
      await prisma.review.create({
        data: { review, ratings, userId: req.user?.id!, eventId },
      });
      res.status(200).send({
        status: 'OK',
        msg: 'Review Created',
      });
    } catch (error) {
      responseError(res, error);
    }
  }
}
