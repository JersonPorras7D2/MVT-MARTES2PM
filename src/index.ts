import express, { Application } from 'express'
import path from 'node:path'
import ProductRouter from './product/router/ProductRouter'
import ProductView from './product/view/ProductView'
import ProductModel from './product/model/ProductModel'
import ErrorView from './error/view/ErrorView'
import ErrorRouter from './error/router/ErrorRouter'
import ContactRouter from './contact/router/ContactRouter'
import ContactView from './contact/view/ContactView'

export default class Server {
  private readonly app: Application

  constructor(private readonly productRouter: ProductRouter, 
    private readonly errorRouter: ErrorRouter,
    private readonly contactRouter: ContactRouter) {
    this.app = express()
    this.configure()
    this.static()
    this.routes()
  }

  private readonly configure = (): void => {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.set('view engine', 'ejs')
    this.app.set('views', path.join(__dirname, './template'))
    
  }

  private readonly routes = (): void => {
    this.app.use('/products', this.productRouter.router)
    this.app.use('/{*any}', this.errorRouter.router)
    this.app.use('/contact', this.contactRouter.router)
    }   

  private readonly static = (): void => {
    this.app.use(express.static(path.join(__dirname, './public')))
  }

  readonly start = (): void => {
    const port = 1888
    const host = 'localhost'
    this.app.listen(port, () => {
      console.log(`Server is running on http://${host}:${port}`)
    })
  }
}

const server = new Server(
  new ProductRouter(new ProductView(new ProductModel())),
  new ErrorRouter(new ErrorView()),
  new ContactRouter(new ContactView()))
server.start()
