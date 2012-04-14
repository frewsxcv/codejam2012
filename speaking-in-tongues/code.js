var readFile = require('fs').readFile;

var buildMap = function (callback) {
    readFile('input.txt', 'ascii', function (err, input) {
        if (err) throw err;
        readFile('output.txt', 'ascii', function (err, output) {
            var ndx, map = {};
            if (err) throw err;
            for (ndx = 0; ndx < input.length; ndx++) {
                map[input[ndx]] = output[ndx];
            }
            map['q'] = 'z';
            map['z'] = 'q';
            callback(map);
        });
    });
};

buildMap(function (map) {
    readFile('A-small-attempt1.in', 'ascii', function (err, data) {
        var ndx, output = '', count = 1;
        for (ndx = 2; ndx < data.length; ndx++) {
            output += map[data[ndx]];
        }
        output = output.split('\n').filter(function (element) {
            return element.length > 0;
        });
        for (ndx = 0; ndx < output.length; ndx++) {
            console.log('Case #' + (count++) + ': ' + output[ndx]);
        }
    });
});
