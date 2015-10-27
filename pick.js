function randomNumberBetween(min, max) {
    var number;

    do {
        number = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (number === 0);

    return number;
}

function Slots(count) {
    this._slots = new Array(count);
}

Slots.prototype.toArray = function () {
    return this._slots.slice(0);
};

Slots.prototype.numbersBetween = function (min, max) {
    this._slots = this._slots.map(function (item) {
        return this._or && Math.random() > 0.5
            ? item
            : randomNumberBetween(min, max);
    }, this);

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

    return this;
};

Slots.prototype.zero = function () {
    this._slots = this._slots.map(function (item) {
        return this._or && Math.random() > 0.5
            ? item
            : 0;
    }, this);

    return this;
};

Slots.prototype.or = function () {
    this._or = true;
    return this;
};

exports.exactly = function (count) {
    return new Slots(count);
};

exports.between =function (min, max) {
    return new Slots(randomNumberBetween(min, max));
};
