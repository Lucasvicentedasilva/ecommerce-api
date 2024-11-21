import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Product from '#models/product'
import Cart from '#models/cart'

export default class CartProduct extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare cartId: number

  @column()
  declare productId: number

  @column()
  declare quantityItems: number

  @column()
  declare priceTotal: number //trocar o tipo da propriedade?

  @belongsTo(() => Cart)
  declare cart: any

  @belongsTo(() => Product)
  declare product: any
}
