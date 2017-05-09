const sql = require('./sql');
const shortid = require('shortid');

// Create an app row.
exports.create = function(name) {
  return sql.one('INSERT INTO app(id, name, created_at, updated_at) VALUES ($1, $2, $3, $3) RETURNING id', [
    shortid.generate(), name, new Date()
  ]);
};

// Returns app by id.
exports.get = function(id) {
  return sql.oneOrNone('SELECT * FROM app WHERE id = $1', [
    id
  ]);
};

// Create an app key row.
exports.createKey = function(appId, name, access, channel) {
  var key = appId + '.' + shortid.generate() + shortid.generate();
  return sql.one('INSERT INTO app_keys(key, name, access, channel, app_id, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $6) RETURNING key', [
    key, name, access, channel, appId, new Date()
  ]);
};
