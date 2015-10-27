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
    var io = generator.generate(1, [ 'B', 'O', 'O', 'T', 'S', 'E', 'Q' ]);

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
