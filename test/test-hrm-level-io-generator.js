var generator = require('../index.js');

function brute(testFn) {
    for (var i = 0; i < 1000; i++) {
        testFn();
    }
}

exports.testGenerateInbox1 = function (test) {
    brute(function () {
        var io = generator.generate(1);

        test.ok(io.inbox.length === 3);
        test.ok(io.inbox.every(function (item) {
            return item >= 1 && item <= 9;
        }));
    });
    test.done();
};

exports.testGenerateOutbox1 = function (test) {
    var io = generator.generate(1, [ 1, 9, 4 ]);

    test.deepEqual(io.outbox, [ 1, 9, 4 ]);
    test.done();
};

exports.testGenerateInbox2 = function (test) {
    brute(function () {
        var io = generator.generate(2);

        test.ok(io.inbox.length >= 6 && io.inbox.length <= 15);
        test.ok(io.inbox.every(function (item) {
            return item >= 'A' && item <= 'Z';
        }));
    });
    test.done();
};

exports.testGenerateOutbox2 = function (test) {
    var io = generator.generate(2, [ 'B', 'O', 'O', 'T', 'S', 'E', 'Q' ]);

    test.deepEqual(io.outbox, [ 'B', 'O', 'O', 'T', 'S', 'E', 'Q' ]);
    test.done();
};

exports.testGenerateInbox3 = function (test) {
    brute(function () {
        var io = generator.generate(3);

        test.deepEqual(io.inbox, [ -99, -99, -99, -99 ]);
    });
    test.done();
};

exports.testGenerateOutbox3 = function (test) {
    var io = generator.generate(3, [ -99, -99, -99, -99 ]);

    test.deepEqual(io.outbox, [ 'B', 'U', 'G' ]);
    test.done();
};

exports.testGenerateInbox7 = function (test) {
    brute(function () {
        var io = generator.generate(7);

        test.ok(io.inbox.length >= 6 && io.inbox.length <= 15);
        test.ok(io.inbox.every(function (item) {
            return (item >= 'A' && item <= 'Z') || (item >= -9 && item <= 9);
        }));
    });
    test.done();
};

exports.testGenerateOutbox7 = function (test) {
    var io = generator.generate(7, [ 8, 0, -4, 'A', 0, 0, 9, 0 ]);

    test.deepEqual(io.outbox, [ 8, -4, 'A', 9 ]);
    test.done();
};

exports.testGenerateInbox8 = function (test) {
    brute(function () {
        var io = generator.generate(8);

        test.ok(io.inbox.length >= 3 && io.inbox.length <= 6);
        test.ok(io.inbox.every(function (item) {
            return item >= -9 && item <= 9;
        }));
    });
    test.done();
};

exports.testGenerateOutbox8 = function (test) {
    var io = generator.generate(8, [ 7, -5, 5, 0 ]);

    test.deepEqual(io.outbox, [ 21, -15, 15, 0 ]);
    test.done();
};

exports.testGenerateInbox9 = function (test) {
    brute(function () {
        var io = generator.generate(9);

        test.ok(io.inbox.length >= 6 && io.inbox.length <= 15);
        test.ok(io.inbox.every(function (item) {
            return (item >= 'A' && item <= 'Z') || (item >= -9 && item <= 9);
        }));
    });
    test.done();
};

exports.testGenerateOutbox9 = function (test) {
    var io = generator.generate(9, [ 2, 0, 1, 'B', 0, 0, 6, 0 ]);

    test.deepEqual(io.outbox, [ 0, 0, 0, 0 ]);
    test.done();
};

exports.testGenerateInbox40 = function (test) {
    brute(function () {
        var io = generator.generate(40);

        test.ok(io.inbox.length === 3);
        test.ok(io.inbox.every(function (item) {
            return item >= 2 && item <= 30;
        }));
    });
    test.done();
};

exports.testGenerateOutbox40 = function (test) {
    var io = generator.generate(40, [ 13, 18, 11 ]);

    test.deepEqual(io.outbox, [ 13, 2, 3, 3, 11 ]);
    test.done();
};
