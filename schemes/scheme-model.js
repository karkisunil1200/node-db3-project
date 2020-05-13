const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  findSteps,
  add,
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

function findSteps(id) {
  return db
    .select('*')
    .from('steps')
    .join('schemes', 'steps.scheme_id', 'schemes.id');
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
