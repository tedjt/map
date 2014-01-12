
# map
 
  Map keys in an object to achieve sanity.

## Installation

    $ npm install ivolo/map

## Example

```js
var map = require('map');

var obj = { 
  peoples: 1,
  a { 
    person: { 
      $first_name: 'Ilya', 
      LASTname: 'Volodarsky' 
    }
  }
};

var schema = {
  'count': 'peoples',
  'contact.firstName': 'person.$first_name',
  'contact.lastName': 'person.lastname',
  'contact.name': 'a.person.name'
};

map(obj, schema);
// { count: 1, contact: { firstName: 'Ilya', lastName: 'Volodarsky' }}

```

## API

#### .map(obj, schema)

  Return another object with the `obj` keys mapped according to the `schema`.


## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

[Copyright (c) 2013](http://animals.ivolo.me) [Segment.io](https://segment.io) &lt;friends@segment.io&gt;
