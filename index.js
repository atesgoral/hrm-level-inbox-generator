var pick = require('./pick'),
    levels = require('hrm-level-data');

var wordLists = {
    'general': [
        'ALIVE',
        'ARM',
        'ARMY',
        'AUTO',
        'AWAKE',
        'BOY',
        'BRAIN',
        'BUG',
        'BYTE',
        'CLOUD',
        'CODE',
        'DOG',
        'EYE',
        'FACE',
        'FALSE',
        'FISH',
        'FOOT',
        'GIRL',
        'GO',
        'GOAT',
        'HAND',
        'HER',
        'HIM',
        'HUMAN',
        'IT',
        'LAKE',
        'LOGIC',
        'MAN',
        'MANY',
        'ME',
        'MORE',
        'NECK',
        'NEW',
        'NO',
        'NOW',
        'OFF',
        'OIL',
        'OLD',
        'ONE',
        'TEA',
        'THINK',
        'TIME',
        'TOOL',
        'TORSO',
        'TRUE',
        'TWO',
        'UP',
        'WE',
        'WHEN',
        'WHO',
        'YES',
        'YOU'
    ],
    sharedPrefix: [
        'UNDER',
        'UNIT',
        'UNITE',
        'UNDO',
        'UNCLE',
        'UNCAP',
        'UNIX',
        'UNFIT',
        'UNIFY',
        'UNION',
        'UNITS',
        'UNITY',
        'UNSET',
        'UNTIE',
        'UNTIL',
        'UNWED',
        'UNZIP',
        'DIRT',
        'UN'
    ],
    busyMailRoom: [
        'INITIALIZE',
        'BOOTSEQUENCE',
        'LOADPROGRAM',
        'AUTOEXEC'
    ]
};

var tilesForLevel = {};

levels.forEach(function (level) {
    tilesForLevel[level.number] = level.floor && level.floor.tiles;
});

var generators = {
    /*** Mail Room ***/
    '1': function () {
        return pick.exactly(3).numbersBetween(1, 9).toArray();
    },
    /*** Busy Mail Room ***/
    '2': function () {
        return pick.exactly(1).wordFrom(wordLists.busyMailRoom).toArray();
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
    '30': function () {
        return [ 4, 15, 7, 0, 22, 17, 11, 20, 2, 13, 4, 17, 22 ];
    },
    /*** String Reverse ***/
    '31': function () {
        return [].concat(
            pick.between(1, 5).letters().toArray().concat(0),
            pick.between(1, 5).letters().toArray().concat(0),
            pick.between(1, 5).letters().toArray().concat(0)
        );
    },
    /*** Inventory Report ***/
    '32': function (tiles) {
        var letterMap = {};

        tiles.forEach(function (tile) {
            if (tile !== 0) {
                letterMap[tile] = true;
            }
        });

        return pick.exactly(4).from(function () {
            var letters = Object.keys(letterMap),
                letter = letters[Math.floor(Math.random() * letters.length)];

            delete letterMap[letter];

            return letter;
        }).toArray();
    },
    /*** Where's Carol? ***/
    '33': null,
    /*** Vowel Incinerator ***/
    '34': function () {
        return pick.exactly(10).letters().toArray();
    },
    /*** Duplicate Removal ***/
    '35': function () {
        return pick.exactly(10).letters().toArray();
    },
    /*** Alphabetizer ***/
    '36': function () {
        return [].concat(
            pick.between(3, 6).letters().toArray().concat(0),
            pick.between(3, 6).letters().toArray().concat(0)
        );
    },
    /*** Scavenger Chain ***/
    '37': function () {
        return [ 23, 0 ];
    },
    /*** Digit Exploder ***/
    '38': function () {
        return pick.exactly(4).numbersBetween(1, 999).toArray();
    },
    /*** Re-Coordinator ***/
    '39': function () {
        return pick.exactly(4).numbersBetween(0, 15).toArray();
    },
    /*** Prime Factory ***/
    '40': function () {
        return pick.exactly(3).numbersBetween(2, 30).toArray(); // @todo .primes().or().nonPrimes()
    },
    /*** Sorting Floor ***/
    '41': function () {
        return [].concat(
            pick.between(1, 10).nonZero().numbersBetween(1, 10).toArray().concat(0),
            pick.between(1, 10).letters().toArray().concat(0),
            pick.between(1, 10).nonZero().numbersBetween(1, 10).toArray().concat(0)
        );
    },
    /*** End Program. Congratulations. ***/
    '42': null
};

exports.seed = function (seed) {
    pick.seed(seed);
};

exports.generate = function (levelNumber) {
    var generator = generators[levelNumber];

    if (!generator) {
        return null;
    }

    return generator(tilesForLevel[levelNumber]);
};
