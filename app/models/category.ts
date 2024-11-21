import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Product from '#models/product'

export default class Category extends BaseModel {
  // Declara a coluna id como a chave primária
  @column({ isPrimary: true })
  declare id: number

  // Declara a coluna name
  @column()
  declare name: string

    // Relacionamento com Product (1:N)
    @hasMany(() => Product)
    declare products: any

  // Declara a coluna createdAt com o tipo de data e hora
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  // Declara a coluna updatedAt com o tipo de data e hora
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
