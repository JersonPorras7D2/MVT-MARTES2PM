import { Router } from 'express'
import FormView from '../view/FormView'

export default class FormRouter {
  router: Router

  constructor(private readonly formView: FormView) {
    this.router = Router()
    this.routes()
  }

  readonly routes = (): void => {
    this.router.get('/v1.0/register', this.formView.showForm)
    this.router.post('/v1.0/register', this.formView.submitForm)
    // Alias simple por si navegan a /form/register
    this.router.get('/register', this.formView.showForm)
  }
}
