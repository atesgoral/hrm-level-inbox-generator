var pick = require('./pick'),
    pf = require('quick-primefactors'),
    levels = require('hrm-level-data');

var tilesForLevel = {};

levels.forEach(function (level) {
    tilesForLevel[level.number] = level.floor && level.floor.tiles;
});

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

/*** Rainy Summer ***/
generators[6] = function (inbox) {
    inbox = inbox || pick.between(3, 6).pairsOf().numbersBetween(-9, 9).toArray();

    // Output the sum of each pair
    var outbox = [];

    for (var i = 0; i < inbox.length; i += 2) {
        outbox.push(inbox[i] + inbox[i + 1]);
    }

    return {
        inbox: inbox,
        outbox: outbox
    };
};

/*** Zero Exterminator ***/
generators[7] = function (inbox) {
    inbox = inbox || pick.between(6, 15).letters().or().numbersBetween(-9, 9).toArray();

    // Filter out zeros
    var outbox = inbox.filter(function (item) {
        return item !== 0;
    });

    return {
        inbox: inbox,
        outbox: outbox
    };
};

/*** Tripler Room ***/
generators[8] = function (inbox) {
    inbox = inbox || pick.between(3, 6).numbersBetween(-9, 9).toArray();

    // Multiply the numbers by 3
    var outbox = inbox.map(function (item) {
        return item * 3;
    });

    return {
        inbox: inbox,
        outbox: outbox
    };
};

/*** Zero Preservation Initiative ***/
generators[9] = function (inbox) {
    inbox = inbox || pick.between(6, 15).letters().or().numbersBetween(-9, 9).toArray();

    // Preserve zeros
    var outbox = inbox.filter(function (item) {
        return item === 0;
    });

    return {
        inbox: inbox,
        outbox: outbox
    };
};

/*** Octoplier Suite ***/
generators[10] = function (inbox) {
    inbox = inbox || pick.between(3, 6).numbersBetween(-9, 9).toArray();

    // Multiply the numbers by 8
    var outbox = inbox.map(function (item) {
        return item * 8;
    });

    return {
        inbox: inbox,
        outbox: outbox
    };
};

/*** Tetracontiplier ***/
generators[12] = function (inbox) {
    inbox = inbox || pick.between(3, 6).numbersBetween(-9, 9).toArray();

    // Multiply the numbers by 40
    var outbox = inbox.map(function (item) {
        return item * 40;
    });

    return {
        inbox: inbox,
        outbox: outbox
    };
};

/*** Maximization Room ***/
generators[14] = function (inbox) {
    inbox = inbox || pick.between(3, 6).pairsOf().numbersBetween(-9, 9).toArray();

    // Output the maximum of each pair
    var outbox = [];

    for (var i = 0; i < inbox.length; i += 2) {
        outbox.push(Math.max(inbox[i], inbox[i + 1]));
    }

    return {
        inbox: inbox,
        outbox: outbox
    };
};

/*** Storage Floor ***/
generators[29] = function (inbox) {
    var tiles = tilesForLevel[29];

    inbox = inbox || pick.between(4, 8).numbersBetween(0, 9).toArray();

    // Lookup floor tiles
    var outbox = inbox.map(function (item) {
        return tiles[item];
    });

    return {
        inbox: inbox,
        outbox: outbox
    };
};

/*** Prime Factory ***/
generators[40] = function (inbox) {
    inbox = inbox || pick.exactly(3).numbersBetween(2, 30).toArray(); // @todo .primes().or().nonPrimes()

    // Output prime factors smallest to largest of each number
    var outbox = [];

    inbox.forEach(function (item) {
        Array.prototype.push.apply(outbox, pf(item));
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
