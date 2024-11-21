import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'orders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('code').notNullable().unique()
      table.integer('user_id').unsigned().notNullable()
      table.float('total').notNullable()
      
      table.enu('status', ['pendente de aprovação', 'em andamento', 'finalizado', 'cancelado']).notNullable()
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')

      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now()).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}