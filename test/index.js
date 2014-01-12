
var assert = require('assert');
var map = require('..');

describe('map-keys', function () {
  it('should be able to map flat keys', function () {
    var obj = { a: 1, b: 2, c: 3};
    var schema = { one: 'a', three: 'c' };
    var result = map(obj, schema);
    assert.deepEqual(result, { one: 1, three: 3 });
  });

  it('should be able to map nested keys', function () {

    var obj = {
      peoples: 1,
      a: {
        person: {
          first_name: 'Ilya',
          LASTname: 'Volodarsky'
        }
      }
    };

    var schema = {
      'count': 'peoples',
      'contact.firstName': 'a.person.first_name',
      'contact.lastName': 'a.person.LASTname',
      'something.else': ['doesnt.exist.at_all', 'or.this.one'],
      'contact.name': 'a.person.name'
    };

    var result = map(obj, schema);

    assert.deepEqual(result, {
      count: 1,
      contact: {
        firstName: 'Ilya',
        lastName: 'Volodarsky'
      }
    });
  });
});