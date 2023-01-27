/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


exports.up = function (knex) {
  return knex.schema
    .createTable('member', (table) => {
      table.increments('id');
      table.string('first_name', 50).notNullable();
      table.string('last_name', 50).notNullable();
      table.string('username', 50).notNullable();
      table.string('password_hash', 60).notNullable();
      table.boolean('admin').notNullable();
    })
    .createTable('item', (table) => {
      table.increments('id');
      table.string('name', 50).notNullable();
      table.integer('quantity').notNullable();
      table.string('description', 500).notNullable();
      table.integer('member_id').notNullable();
      table.foreign('member_id').references('member.id').onDelete('CASCADE').onUpdate('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .alterTable('item', (table) => {
      table.dropForeign('member_id');
    })
    .dropTableIfExists('item')
    .dropTableIfExists('member');
    
};