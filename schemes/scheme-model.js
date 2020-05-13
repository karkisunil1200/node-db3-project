const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  findSteps,
  add
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
  // .where(`steps.scheme_id`, `scheme.${id}`);
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
