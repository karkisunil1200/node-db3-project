const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  add,
  findSteps,
  update,
  remove
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

function add(data) {
  return db
    .select('*')
    .from('schemes')
    .insert(data, 'id')
    .then(([id]) => {
      return findById(id);
    });
}

function findSteps(id) {
  // not exactly what I wanted
  return db
    .select('*')
    .from('schemes')
    .where({id})
    .then(() => {
      return db.select('*').from('steps');
    });
}

function update(changes, id) {
  return db
    .select('*')
    .from('schemes')
    .where({id})
    .update(changes)
    .then(() => {
      return findById(id);
    });
}

function remove(id) {
  return db
    .select('*')
    .from('schemes')
    .where({id})
    .del();
}
