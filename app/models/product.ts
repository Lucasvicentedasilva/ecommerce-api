import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Category from '#models/category'

export default class Product extends BaseModel {
  // Declara a coluna id como a chave primária
  @column({ isPrimary: true })
  declare id: number

  // Declara a coluna name
  @column()
  declare name: string

    // Declara a coluna description
    @column()
    declare description: string

  // Declara a coluna price
  @column()
  declare price: number

  // Declara a coluna image
  @column()
  declare image: string

 // Declara a coluna category_id
 @column()
 declare categoryId: number

 // Relacionamento com Category (1:N)
 @belongsTo(() => Category)
 declare category: any

  // Declara a coluna createdAt com o tipo de data e hora
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  // Declara a coluna updatedAt com o tipo de data e hora
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
