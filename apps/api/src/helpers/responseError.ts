import { Response } from "express"

export const responseError = (res: Response, error: string | any) => {
    return res.status(400).send({
        status: 'error',
        msg: error
    })
}