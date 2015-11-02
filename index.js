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
    '4': function () {
        return [].concat(
            pick.exactly(1).pairsOf().numbersBetween(1, 10).toArray(),
            pick.exactly(1).pairsOf().letters().toArray(),
            pick.exactly(1).pairsOf().numbersBetween(1, 10).toArray()
        );
    },
    /*** Coffee Time ***/
    '5': null,
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
    '13': function () {
        return pick.exactly(4).pairsOf().numbersBetween(-9, 9).toArray();
    },
    /*** Maximization Room ***/
    '14': function () {
        return pick.between(3, 6).pairsOf().numbersBetween(-9, 9).toArray();
    },
    /*** Employee Morale Insertion ***/
    '15': null,
    /*** Absolute Positivity ***/
    '16': function () {
        return pick.exactly(7).numbersBetween(-9, 9).toArray();
    },
    /*** Exclusive Lounge ***/
    '17': function () {
        return pick.exactly(4).pairsOf().nonZero().numbersBetween(-9, 9).toArray();
    },
    /*** Sabbatical Beach Paradise ***/
    '18': null,
    /*** Countdown ***/
    '19': function () {
        return pick.exactly(4).numbersBetween(-9, 9).toArray();
    },
    /*** Multiplication Workshop ***/
    '20': function () {
        return pick.exactly(5).pairsOf().numbersBetween(0, 9).toArray();
    },
    /*** Zero Terminated Sum ***/
    '21': function () {
        return [].concat(
            pick.between(0, 5).nonZero().numbersBetween(-9, 9).toArray().concat(0),
            pick.between(0, 5).nonZero().numbersBetween(-9, 9).toArray().concat(0),
            pick.between(0, 5).nonZero().numbersBetween(-9, 9).toArray().concat(0)
        );
    },
    /*** Fibonacci Visitor ***/
    '22': function () {
        return pick.exactly(2).numbersBetween(5, 25).toArray();
    },
    /*** The Littlest Number ***/
    '23': function () {
        return [].concat(
            pick.between(3, 5).numbersBetween(1, 99).toArray().concat(0),
            pick.between(3, 5).numbersBetween(1, 99).toArray().concat(0),
            pick.between(3, 5).numbersBetween(1, 99).toArray().concat(0)
        );
    },
    /*** Mod Module ***/
    '24': function () {
        return pick.exactly(4).pairsOf().numbersBetween(1, 9).toArray(); // @todo allow 0 in dividend
    },
    /*** Cumulative Countdown ***/
    '25': function () {
        return pick.exactly(4).numbersBetween(0, 9).toArray();
    },
    /*** Small Divide ***/
    '26': function () {
        return pick.exactly(4).pairsOf().numbersBetween(1, 9).toArray(); // @todo allow 0 in dividend
    },
    /*** Midnight Petroleum ***/
    '27': null,
    /*** Three Sort ***/
    '28': function () {
        return pick.exactly(4).triplesOf().numbersBetween(-9, 9).toArray();
    },
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
    /*** Where's Carol? ***/
    '33': null,
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
    /*** End Program. Congratulations. ***/
    '42': null
};

exports.generate = function (levelNumber) {
    var generator = generators[levelNumber];

    if (!generator) {
        return null;
    }

    return generator();
};
