import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'auth_access_tokens'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('tokenable_id').unsigned().notNullable()

      table.string('type').notNullable()
      table.string('name').nullable()
      table.string('hash').notNullable()
      table.string('abilities').notNullable()

      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now()).nullable()
      table.timestamp('last_used_at').nullable()
      table.timestamp('expires_at').nullable()

      table.foreign('tokenable_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}