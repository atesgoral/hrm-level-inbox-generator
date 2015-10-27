[![Build Status](https://travis-ci.org/atesgoral/hrm-level-io-generator.svg?branch=master)](https://travis-ci.org/atesgoral/hrm-level-io-generator)

# hrm-level-io-generator
Human Resource Machine inbox/outbox data generator for testing and benchmarking solutions

## generate(levelNumber, [ inbox ])

**levelNumber** - _Number_. The level number (1-41).

**inbox** - _Array_. _Optional_. If omitted, a random inbox will be generated. You can pass in a specific inbox if you like.

**returns** - _Object_. The object has `inbox` and `object` arrays as properties.

If the generator doesn't support the given level, a `null` is returned.

## Example

```js
var generator = require('hrm-level-io-generator');

var expectation = generator.generate(8); // Tripler Room

expectation.inbox // [ 2, 4, 0, -5 ]
expectation.outbox // [ 6, 12, 0, -15 ]
```
