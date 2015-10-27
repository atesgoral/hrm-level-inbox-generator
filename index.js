function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Slots(count) {
    this.slots = new Array(count);
}

Slots.prototype.toArray = function () {
    return this.slots.slice(0);
};

Slots.prototype.numbersUpTo = function (max) {
    this.slots = this.slots.map(function () {
        return Math.floor(Math.random() * max) + 1;
    });

    return this;
};

Slots.prototype.letters = function () {
    var a = 'A'.charCodeAt(0),
        z = 'Z'.charCodeAt(0);

    this.slots = this.slots.map(function () {
        return String.fromCharCode(randomNumberBetween(a, z));
    });

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
    inbox = inbox || pick.exactly(3).numbersUpTo(9).toArray();

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

exports.generate = function (levelNumber, inbox) {
    var generator = generators[levelNumber];

    if (!generator) {
        return null;
    }

    return generator(inbox);
};
