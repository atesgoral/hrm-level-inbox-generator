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

var pick = {
    exactly: function (count) {
        return new Slots(count);
    },
    between: function (min, max) {
        return new Slots(randomNumberBetween(min, max));
    }
};


var generators = {};

/*** Mail Room ***/
generators[1] = function (inbox) {
    inbox = inbox || pick.exactly(3).numbersBetween(1, 9).toArray();

    // Direct copy
    var outbox = inbox.slice(0);

    return {
        inbox: inbox,
        outbox: outbox
    };
};

/*** Busy Mail Room ***/
generators[2] = function (inbox) {
    inbox = inbox || pick.between(6, 15).letters().toArray();

    // Direct copy
    var outbox = inbox.slice(0);

    return {
        inbox: inbox,
        outbox: outbox
    };
};

/*** Copy Floor ***/
generators[3] = function () {
    // Hard-coded
    return {
        inbox: [ -99, -99, -99, -99 ],
        outbox: [ "B", "U", "G" ]
    };
};

/*** Zero Exterminator ***/
generators[7] = function (inbox) {
    inbox = inbox || pick.between(6, 15).letters().or().numbersBetween(-9, 9).or().zero().toArray();

    // Filter out zeros
    var outbox = inbox.filter(function (item) {
        return item !== 0;
    });

    return {
        inbox: inbox,
        outbox: outbox
    };
};

exports.generate = function (levelNumber, inbox) {
    var generator = generators[levelNumber];

    if (!generator) {
        return null;
    }

    return generator(inbox);
};
