[![npm](https://img.shields.io/npm/v/hrm-level-inbox-generator)][1]
[![Build and Deploy](https://github.com/atesgoral/hrm-level-inbox-generator/actions/workflows/test.yml/badge.svg)][2]

[1]: https://www.npmjs.com/package/hrm-level-inbox-generator
[2]: https://github.com/atesgoral/hrm-level-inbox-generator/actions/workflows/test.yml

# hrm-level-inbox-generator
Human Resource Machine inbox generator for testing and benchmarking solutions.

Generates a random inbox that is appropriate for a given level.

## Methods

### .generate(levelNumber)

**levelNumber** - _Number_. The level number (1-41).

**returns** - _Array_. If the generator doesn't support the given level, a `null` is returned.

### .seed(seed)

**seed** - _Number_. Seeds the random number generator to consistently get the same inbox configurations on subsequent `.generate()` calls.

## Example

```js
var generator = require('hrm-level-inbox-generator');

// Tripler Room
var inbox = generator.generate(8); // [ 2, 4, 0, -5 ]
```
