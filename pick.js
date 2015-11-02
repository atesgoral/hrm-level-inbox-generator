// @todo Assert state/chain transitions

function randomNumberBetween(min, max, nonZero) {
    var number;

    do {
        number = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (nonZero && number === 0);

    return number;
}

function Slots(count) {
    this._slots = new Array(count);
}

Slots.prototype.toArray = function () {
    return this._slots.slice(0);
};

Slots.prototype.pairsOf = function () {
    this._slots = new Array(this._slots.length * 2);
    return this;
};

Slots.prototype.triplesOf = function () {
    this._slots = new Array(this._slots.length * 3);
    return this;
};

Slots.prototype.numbersBetween = function (min, max) {
    this._slots = this._slots.map(function (item) {
        return this._or && Math.random() > 0.5
            ? item
            : randomNumberBetween(min, max, this._nonZero);
    }, this);

    this._or = false;

    return this;
};

Slots.prototype.letters = function () {
    var a = 'A'.charCodeAt(0),
        z = 'Z'.charCodeAt(0);

    this._slots = this._slots.map(function (item) {
        return this._or && Math.random() > 0.5
            ? item
            : String.fromCharCode(randomNumberBetween(a, z));
    }, this);

    this._or = false;

    return this;
};

Slots.prototype.or = function () {
    this._or = true;
    return this;
};

Slots.prototype.nonZero = function () {
    this._nonZero = true;
    return this;
};

exports.exactly = function (count) {
    return new Slots(count);
};

exports.between =function (min, max) {
    return new Slots(randomNumberBetween(min, max));
};
