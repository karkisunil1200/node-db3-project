const knex = require('knex');
const config = require('../knexfile');

const enviroment = process.env.NODE_ENV || 'development';

const db = knex(config[enviroment]);

module.exports = db;
