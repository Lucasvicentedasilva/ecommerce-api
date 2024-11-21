import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('username').nullable()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now()).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}