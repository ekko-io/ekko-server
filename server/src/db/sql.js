// Initialize pg promise.
const pgp = require('pg-promise')();

// Connect to the database.
const sql = pgp({
  host: 'localhost',
  port: 5432,
  database: 'ekko',
  user: 'ekko',
  password: 'ekko',
  poolSize: 20
});

// Exports the object.
module.exports = sql;
