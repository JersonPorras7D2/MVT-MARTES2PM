import { Request, Response } from 'express'
import FormModel, { RegistrationData } from '../model/FormModel'

export default class FormView {
  constructor(private readonly formModel: FormModel) {}

  readonly showForm = (_req: Request, res: Response) => {
    res.status(200).render('form')
  }

  readonly submitForm = async (req: Request, res: Response) => {
    const { firstNames, lastNames, documentId, address, phone } = req.body as RegistrationData
    await this.formModel.saveRegistration({ firstNames, lastNames, documentId, address, phone })
    res.status(200).render('form', { success: true })
  }
}

