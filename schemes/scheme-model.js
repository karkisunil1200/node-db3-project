const db = require('../data/dbConfig');

module.exports = {
  find,
  findById
};

function find() {
  return db.select('*').from('schemes');
}

function findById(id) {
  return db
    .select('*')
    .from('schemes')
    .where({id})
    .first();
}
