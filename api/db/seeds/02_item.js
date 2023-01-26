/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('item').del()
    await knex('item').insert([
      { id: 1, name: 'paper', quantity: 63400, description: 'this is paper', member_id: 1 },
      { id: 2, name: 'pens', quantity: 67421, description: 'this is a pen', member_id: 2 },
      { id: 3, name: 'stapler', quantity: 68410, description: 'this is a stapler', member_id: 3 },
      { id: 4, name: 'ink', quantity: 8410, description: 'this is ink', member_id: 1 }
    ]);
  };