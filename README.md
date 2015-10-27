[![Build Status](https://travis-ci.org/atesgoral/hrm-level-inbox-generator.svg?branch=master)](https://travis-ci.org/atesgoral/hrm-level-inbox-generator)

# hrm-level-inbox-generator
Human Resource Machine inbox generator for testing and benchmarking solutions.

Generates a random inbox that is appropriate for a given level.

## Methods

### .generate(levelNumber)

**levelNumber** - _Number_. The level number (1-41).

**returns** - _Array_. If the generator doesn't support the given level, a `null` is returned.

## Example

```js
var generator = require('hrm-level-inbox-generator');

// Tripler Room
var inbox = generator.generate(8); // [ 2, 4, 0, -5 ]
```
