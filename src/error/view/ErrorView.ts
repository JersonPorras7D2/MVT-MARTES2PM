import { Request, Response } from 'express'

export default class ErrorView {

  readonly notFound = async (_req: Request, res: Response) => {
    res.status(404).render('error')
  }

  
}