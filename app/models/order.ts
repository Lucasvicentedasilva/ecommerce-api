import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, manyToMany } from '@adonisjs/lucid/orm'
import Product from '#models/product'
import User from '#models/user'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare code: string

  @column()
  declare userId: number

  @column()
  declare status: 'pendente de aprovação' | 'em andamento' | 'finalizado' | 'cancelado'

  @column()
  declare total: number

  @belongsTo(() => User)
  declare user: any

  @manyToMany(() => Product, {
    pivotTable: 'order_product',
    pivotColumns: ['quantity', 'price'],
  })
  declare products: any

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}