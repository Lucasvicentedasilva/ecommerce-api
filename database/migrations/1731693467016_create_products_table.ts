import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      
      table.string('name').notNullable()
      table.text('description').notNullable()
      table.float('price').notNullable()
      table.string('image').notNullable()
      table.integer('category_id').unsigned().notNullable()

      table.foreign('category_id').references('id').inTable('categories').onDelete('CASCADE')

      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now()).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}