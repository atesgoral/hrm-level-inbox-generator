var pick = require('./pick');

var generators = {
    /*** Mail Room ***/
    '1': function () {
        return pick.exactly(3).numbersBetween(1, 9).toArray();
    },
    /*** Busy Mail Room ***/
    '2': function () {
        return pick.between(6, 15).letters().toArray();
    },
    /*** Copy Floor ***/
    '3': function () {
        return [ -99, -99, -99, -99 ];
    },
    /*** Scrambler Handler ***/
    '4': undefined,
    /*** Rainy Summer ***/
    '6': function () {
        return pick.between(3, 6).pairsOf().numbersBetween(-9, 9).toArray();
    },
    /*** Zero Exterminator ***/
    '7': function () {
        return pick.between(6, 15).letters().or().numbersBetween(-9, 9).toArray();
    },
    /*** Tripler Room ***/
    '8': function () {
        return pick.between(3, 6).numbersBetween(-9, 9).toArray();
    },
    /*** Zero Preservation Initiative ***/
    '9': function () {
        return pick.between(6, 15).letters().or().numbersBetween(-9, 9).toArray();
    },
    /*** Octoplier Suite ***/
    '10': function () {
        return pick.between(3, 6).numbersBetween(-9, 9).toArray();
    },
    /*** Sub Hallway ***/
    '11': function () {
        return pick.between(3, 6).pairsOf().numbersBetween(-9, 9).toArray();
    },
    /*** Tetracontiplier ***/
    '12': function () {
        return pick.between(3, 6).numbersBetween(-9, 9).toArray();
    },
    /*** Equalization Room ***/
    '13': undefined,
    /*** Maximization Room ***/
    '14': function () {
        return pick.between(3, 6).pairsOf().numbersBetween(-9, 9).toArray();
    },
    /*** Absolute Positivity ***/
    '16': undefined,
    /*** Exclusive Lounge ***/
    '17': undefined,
    /*** Countdown ***/
    '19': undefined,
    /*** Multiplication Workshop ***/
    '20': undefined,
    /*** Zero Terminated Sum ***/
    '21': undefined,
    /*** Fibonacci Visitor ***/
    '22': undefined,
    /*** The Littlest Number ***/
    '23': undefined,
    /*** Mod Module ***/
    '24': undefined,
    /*** Cumulative Countdown ***/
    '25': undefined,
    /*** Small Divide ***/
    '26': undefined,
    /*** Three Sort ***/
    '28': undefined,
    /*** Storage Floor ***/
    '29': function () {
        return pick.between(4, 8).numbersBetween(0, 9).toArray();
    },
    /*** String Storage Floor ***/
    '30': undefined,
    /*** String Reverse ***/
    '31': undefined,
    /*** Inventory Report ***/
    '32': undefined,
    /*** Vowel Incinerator ***/
    '34': undefined,
    /*** Duplicate Removal ***/
    '35': undefined,
    /*** Alphabetizer ***/
    '36': undefined,
    /*** Scavenger Chain ***/
    '37': undefined,
    /*** Digit Exploder ***/
    '38': undefined,
    /*** Re-Coordinator ***/
    '39': undefined,
    /*** Prime Factory ***/
    '40': function () {
        return pick.exactly(3).numbersBetween(2, 30).toArray(); // @todo .primes().or().nonPrimes()
    },
    /*** Sorting Floor ***/
    '41': undefined,
};

exports.generate = function (levelNumber) {
    var generator = generators[levelNumber];

    if (!generator) {
        return null;
    }

    return generator();
};
