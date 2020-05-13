const db = require('../data/dbConfig');

module.exports = {
  find
};

function find() {
  return db.select('*').from('schemes');
}
