import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cart_products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('cart_id').unsigned().notNullable()
      table.integer('product_id').unsigned().notNullable()
      table.integer('quantity_items').unsigned().notNullable()
      table.float('price_total').notNullable()

      table.foreign('cart_id').references('id').inTable('carts').onDelete('CASCADE')
      table.foreign('product_id').references('id').inTable('products').onDelete('CASCADE')

      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now()).nullable()

      table.primary(['cart_id', 'product_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}