const { Pool } = require('pg');

module.exports = new Pool({
  user: 'postgres',
  password: 'password',
  host: '192.168.0.107',
  port: 5432,
  database: 'launchstore'
});
