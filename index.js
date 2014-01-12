
var clone = require('clone');
var objCase = require('obj-case');

/**
 * Expose `map`.
 */

module.exports = map;

/**
 * Return another object with the `obj` keys remapped based on the
 * `schema`.
 *
 * @param {Object} obj
 * @param {Object} schema
 * @returns {Object}
 */

function map (obj, schema) {
  var result = {};
  Object.keys(schema).forEach(function (toKey) {
    var fromKeys = [];
    if (Array.isArray(schema[toKey])) fromKeys = schema[toKey];
    else fromKeys = [schema[toKey]];
    fromKeys.forEach(function (fromKey) {
      var val = objCase(obj, fromKey);
      if (val) {
        var target = ensure(result, toKey);
        var targetKey = lastKey(toKey);
        target[targetKey] = clone(val);
      }
    });
  });
  return result;
}

/**
 * Return the last key in a period deliminated string.
 *
 * @param {String} key
 * @return {String}
 */

function lastKey (key) {
  var tokens = key.split('.');
  return tokens[tokens.length-1];
}

/**
 * Ensures that an object exists at a period deliminated key.
 * @param {Object} obj
 * @param {String} key
 * @return {Object}
 */

function ensure (obj, key) {
  var tokens = key.split('.');
  var current = obj;
  for (var i = 0; i < tokens.length - 1; i += 1) {
    var token = tokens[i];
    if (!current[token]) current[token] = {};
    current = current[token];
  }
  return current;
}