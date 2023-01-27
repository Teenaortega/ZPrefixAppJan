/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('member').del()
    await knex('member').insert([
      { id: 1, first_name: 'Santa', last_name: 'Claus', username: "bbb", password_hash: "$2b$12$hig73jSR/ccryE0pNivX7.SqN4DeovW1jXK7Drnq9QxxIKQgiTnA6", admin: false},
      { id: 2, first_name: 'Bingo', last_name: 'Claus', username: "aaa", password_hash: "$2b$12$/PdDxfNcLeGf6Cgg09EkcOG2bfv3rhAGOjkfwSLyGvhN9eZGsRvOu", admin: true},
      { id: 3, first_name: 'Test', last_name: 'Testington', username: "test", password_hash: "$2b$12$YobH2WZ8idc6UdCtUHcJ3u70a9Dt.TS5edX/FVa.91hkyIIJ6IMVq", admin: true}
    ]);
  };