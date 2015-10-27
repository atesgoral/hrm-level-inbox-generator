var generator = require('../index.js');

function brute(testFn) {
    for (var i = 0; i < 1000; i++) {
        testFn();
    }
}

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

exports.test3 = function (test) {
    brute(function () {
        var inbox = generator.generate(3);

        test.deepEqual(inbox, [ -99, -99, -99, -99 ]);
    });
    test.done();
};

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
