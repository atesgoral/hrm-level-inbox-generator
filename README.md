[![Build Status](https://travis-ci.org/atesgoral/hrm-level-io-generator.svg?branch=master)](https://travis-ci.org/atesgoral/hrm-level-io-generator)

# hrm-level-io-generator
Human Resource Machine inbox/outbox data generator for testing and benchmarking solutions

Generates a random inbox that is appropriate for a given level and computes the output that is expected.

## generate(levelNumber, [ inbox ])

**levelNumber** - _Number_. The level number (1-41).

**inbox** - _Array_. _Optional_. If omitted, a random inbox will be generated. You can pass in your own custom inbox and let the generator just compute the output.

**returns** - _Object_. The object has `inbox` and `object` arrays as properties.

If the generator doesn't support the given level, a `null` is returned.

## Example

```js
var generator = require('hrm-level-io-generator');

var expectation = generator.generate(8); // Tripler Room

expectation.inbox // [ 2, 4, 0, -5 ]
expectation.outbox // [ 6, 12, 0, -15 ]
```
