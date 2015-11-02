var generator = require('../index.js'),
    levels = require('hrm-level-data');

var tilesForLevel = {};

levels.forEach(function (level) {
    tilesForLevel[level.number] = level.floor && level.floor.tiles;
});

function brute(testFn) {
    for (var i = 0; i < 1000; i++) {
        testFn();
    }
}

function splitStrings(arr) {
    var strings = [],
        zeroPos;

    while (arr.length) {
        zeroPos = arr.indexOf(0);
        strings.push(arr.slice(0, zeroPos));
        arr = arr.slice(zeroPos + 1);
    }

    return strings;
}

/*** Mail Room ***/
exports.test1 = function (test) {
    brute(function () {
        var inbox = generator.generate(1);

        test.ok(inbox.length === 3);
        test.ok(inbox.every(function (item) {
            return item >= 1 && item <= 9;
        }));
    });
    test.done();
};

/*** Busy Mail Room ***/
exports.test2 = function (test) {
    brute(function () {
        var inbox = generator.generate(2);

        test.ok(inbox.length >= 6 && inbox.length <= 15);
        test.ok(inbox.every(function (item) {
            return item >= 'A' && item <= 'Z';
        }));
    });
    test.done();
};

/*** Copy Floor ***/
exports.test3 = function (test) {
    var inbox = generator.generate(3);

    test.deepEqual(inbox, [ -99, -99, -99, -99 ]);
    test.done();
};

/*** Scrambler Handler ***/
exports.test4 = function (test) {
    brute(function () {
        var inbox = generator.generate(4);

        test.ok(inbox.length === 6);
        test.ok(inbox.slice(0, 2).every(function (item) {
            return item >= -9 && item <= 9;
        }));
        test.ok(inbox.slice(2, 4).every(function (item) {
            return item >= 'A' && item <= 'Z';
        }));
        test.ok(inbox.slice(4).every(function (item) {
            return item >= -9 && item <= 9;
        }));
    });
    test.done();
};

/*** Coffee Time ***/
/*** 5 ***/

/*** Rainy Summer ***/
exports.test6 = function (test) {
    brute(function () {
        var inbox = generator.generate(6);

        test.ok(inbox.length >= 6 && inbox.length <= 12 && (inbox.length & 1) === 0);
        test.ok(inbox.every(function (item) {
            return item >= -9 && item <= 9;
        }));
    });
    test.done();
};

/*** Zero Exterminator ***/
exports.test7 = function (test) {
    brute(function () {
        var inbox = generator.generate(7);

        test.ok(inbox.length >= 6 && inbox.length <= 15);
        test.ok(inbox.every(function (item) {
            return (item >= 'A' && item <= 'Z') || (item >= -9 && item <= 9);
        }));
    });
    test.done();
};

/*** Tripler Room ***/
exports.test8 = function (test) {
    brute(function () {
        var inbox = generator.generate(8);

        test.ok(inbox.length >= 3 && inbox.length <= 6);
        test.ok(inbox.every(function (item) {
            return item >= -9 && item <= 9;
        }));
    });
    test.done();
};

/*** Zero Preservation Initiative ***/
exports.test9 = function (test) {
    brute(function () {
        var inbox = generator.generate(9);

        test.ok(inbox.length >= 6 && inbox.length <= 15);
        test.ok(inbox.every(function (item) {
            return (item >= 'A' && item <= 'Z') || (item >= -9 && item <= 9);
        }));
    });
    test.done();
};

/*** Octoplier Suite ***/
exports.test10 = function (test) {
    brute(function () {
        var inbox = generator.generate(10);

        test.ok(inbox.length >= 3 && inbox.length <= 6);
        test.ok(inbox.every(function (item) {
            return item >= -9 && item <= 9;
        }));
    });
    test.done();
};

/*** Sub Hallway ***/
exports.test11 = function (test) {
    brute(function () {
        var inbox = generator.generate(11);

        test.ok(inbox.length >= 6 && inbox.length <= 12 && (inbox.length & 1) === 0);
        test.ok(inbox.every(function (item) {
            return item >= -9 && item <= 9;
        }));
    });
    test.done();
};

/*** Tetracontiplier ***/
exports.test12 = function (test) {
    brute(function () {
        var inbox = generator.generate(12);

        test.ok(inbox.length >= 3 && inbox.length <= 6);
        test.ok(inbox.every(function (item) {
            return item >= -9 && item <= 9;
        }));
    });
    test.done();
};

/*** Equalization Room ***/
exports.test13 = function (test) {
    brute(function () {
        var inbox = generator.generate(13);

        test.ok(inbox.length === 8);
        test.ok(inbox.every(function (item) {
            return item >= -9 && item <= 9;
        }));
    });
    test.done();
};

/*** Maximization Room ***/
exports.test14 = function (test) {
    brute(function () {
        var inbox = generator.generate(14);

        test.ok(inbox.length >= 6 && inbox.length <= 12 && (inbox.length & 1) === 0);
        test.ok(inbox.every(function (item) {
            return item >= -9 && item <= 9;
        }));
    });
    test.done();
};

/*** Employee Morale Insertion ***/
/*** 15 ***/

/*** Absolute Positivity ***/
exports.test16 = function (test) {
    brute(function () {
        var inbox = generator.generate(16);

        test.ok(inbox.length === 7);
        test.ok(inbox.every(function (item) {
            return item >= -9 && item <= 9;
        }));
    });
    test.done();
};

/*** Exclusive Lounge ***/
exports.test17 = function (test) {
    brute(function () {
        var inbox = generator.generate(17);

        test.ok(inbox.length === 8);
        test.ok(inbox.every(function (item) {
            return item >= -9 && item <= 9 && item !== 0;
        }));
    });
    test.done();
};

/*** Sabbatical Beach Paradise ***/
/*** 18 ***/

/*** Countdown ***/
exports.test19 = function (test) {
    brute(function () {
        var inbox = generator.generate(19);

        test.ok(inbox.length === 4);
        test.ok(inbox.every(function (item) {
            return item >= -9 && item <= 9;
        }));
    });
    test.done();
};

/*** Multiplication Workshop ***/
exports.test20 = function (test) {
    brute(function () {
        var inbox = generator.generate(20);

        test.ok(inbox.length === 10);
        test.ok(inbox.every(function (item) {
            return item >= 0 && item <= 9;
        }));
    });
    test.done();
};

/*** Zero Terminated Sum ***/
exports.test21 = function (test) {
    brute(function () {
        var inbox = generator.generate(21);

        var strings = splitStrings(inbox);

        test.ok(strings.length === 3);

        strings.forEach(function (string) {
            test.ok(string.length >= 0 && string.length <= 5);
            test.ok(string.every(function (item) {
                return item >= -9 && item <= 9;
            }));
        });
    });
    test.done();
};

/*** Fibonacci Visitor ***/
exports.test22 = function (test) {
    brute(function () {
        var inbox = generator.generate(22);

        test.ok(inbox.length === 2);
        test.ok(inbox.every(function (item) {
            return item >= 5 && item <= 25;
        }));
    });
    test.done();
};

/*** The Littlest Number ***/
exports.test23 = function (test) {
    brute(function () {
        var inbox = generator.generate(23);

        var strings = splitStrings(inbox);

        test.ok(strings.length === 3);

        strings.forEach(function (string) {
            test.ok(string.length >= 3 && string.length <= 5);
            test.ok(string.every(function (item) {
                return item >= 1 && item <= 99;
            }));
        });
    });
    test.done();
};

/*** Mod Module ***/
exports.test24 = function (test) {
    brute(function () {
        var inbox = generator.generate(24);

        test.ok(inbox.length === 8);
        test.ok(inbox.every(function (item) {
            return item >= 1 && item <= 9;
        }));
    });
    test.done();
};

/*** Cumulative Countdown ***/
exports.test25 = function (test) {
    brute(function () {
        var inbox = generator.generate(25);

        test.ok(inbox.length === 4);
        test.ok(inbox.every(function (item) {
            return item >= 0 && item <= 9;
        }));
    });
    test.done();
};

/*** Small Divide ***/
exports.test26 = function (test) {
    brute(function () {
        var inbox = generator.generate(24);

        test.ok(inbox.length === 8);
        test.ok(inbox.every(function (item) {
            return item >= 1 && item <= 9;
        }));
    });
    test.done();
};

/*** Midnight Petroleum ***/
/*** 27 ***/

/*** Three Sort ***/
exports.test28 = function (test) {
    brute(function () {
        var inbox = generator.generate(28);

        test.ok(inbox.length === 12);
        test.ok(inbox.every(function (item) {
            return item >= -9 && item <= 9;
        }));
    });
    test.done();
};

/*** Storage Floor ***/
exports.test29 = function (test) {
    brute(function () {
        var inbox = generator.generate(29);

        test.ok(inbox.length >= 4 && inbox.length <= 8);
        test.ok(inbox.every(function (item) {
            return item >= 0 && item <= 9;
        }));
    });
    test.done();
};

/*** String Storage Floor ***/
exports.test30 = function (test) {
    var inbox = generator.generate(30);

    test.deepEqual(inbox, [ 4, 15, 7, 0, 22, 17, 11, 20, 2, 13, 4, 17, 22 ]);
    test.done();
};

/*** String Reverse ***/
exports.test31 = function (test) {
    brute(function () {
        var inbox = generator.generate(31);

        var strings = splitStrings(inbox);

        test.ok(strings.length === 3);

        strings.forEach(function (string) {
            test.ok(string.length >= 1 && string.length <= 5);
            test.ok(string.every(function (item) {
                return item >= 'A' && item <= 'Z';
            }));
        });
    });
    test.done();
};

/*** Inventory Report ***/
exports.test32 = function (test) {
    var tiles = tilesForLevel[32];

    brute(function () {
        var inbox = generator.generate(32);

        test.ok(inbox.length === 4);

        var itemMap = {};

        test.ok(inbox.every(function (item) {
            if (itemMap[item]) {
                return false;
            }

            itemMap[item] = true;

            return item !== 0 && tiles.indexOf(item) !== -1;
        }));
    });
    test.done();
};

/*** Where's Carol? ***/
/*** 33 ***/

/*** Vowel Incinerator ***/
exports.test34 = function (test) {
    brute(function () {
        var inbox = generator.generate(34);

        test.ok(inbox.length === 10);
        test.ok(inbox.every(function (item) {
            return item >= 'A' && item <= 'Z';
        }));
    });
    test.done();
};

/*** Duplicate Removal ***/
exports.test35 = function (test) {
    brute(function () {
        var inbox = generator.generate(35);

        test.ok(inbox.length === 10);
        test.ok(inbox.every(function (item) {
            return item >= 'A' && item <= 'Z';
        }));
    });
    test.done();
};

/*** Alphabetizer ***/
exports.test36 = function (test) {
    brute(function () {
        var inbox = generator.generate(36);

        var strings = splitStrings(inbox);

        test.ok(strings.length === 2);
        test.ok(strings.every(function (string) {
            return string.length >= 3 && string.length <= 6;
        }));
        test.ok(strings.every(function (string) {
            return string.every(function (item) {
                return item >= 'A' && item <= 'Z';
            });
        }));
    });
    test.done();
};

/*** Scavenger Chain ***/
exports.test37 = function (test) {
    test.done();
};

/*** Digit Exploder ***/
exports.test38 = function (test) {
    brute(function () {
        var inbox = generator.generate(38);

        test.ok(inbox.length === 4);
        test.ok(inbox.every(function (item) {
            return item >= 1 && item <= 999;
        }));
    });
    test.done();
};

/*** Re-Coordinator ***/
exports.test39 = function (test) {
    brute(function () {
        var inbox = generator.generate(39);

        test.ok(inbox.length === 4);
        test.ok(inbox.every(function (item) {
            return item >= 0 && item <= 15;
        }));
    });
    test.done();
};

/*** Prime Factory ***/
exports.test40 = function (test) {
    brute(function () {
        var inbox = generator.generate(40);

        test.ok(inbox.length === 3);
        test.ok(inbox.every(function (item) {
            return item >= 2 && item <= 30;
        }));
    });
    test.done();
};

/*** Sorting Floor ***/
exports.test41 = function (test) {
    brute(function () {
        var inbox = generator.generate(41);

        var strings = splitStrings(inbox);

        test.ok(strings.length === 3);
        test.ok(strings.every(function (string) {
            return string.length >= 1 && string.length <= 10;
        }));
        test.ok(strings[0].concat(strings[2]).every(function (item) {
            return item >= 1 && item <= 10;
        }));
        test.ok(strings[1].every(function (item) {
            return item >= 'A' && item <= 'Z';
        }));
    });
    test.done();
};

/*** End Program. Congratulations. ***/
/*** 42 ***/
