var readFile = require('fs').readFile;

var Line = function (line) {
    line = line.split(' ');
    this.googlers = line[0];
    this.surprising = line[1];
    this.min = line[2];
    this.totals = line.splice(3, line.length);
};

Line.prototype.getCount = function () {
    var ndx, count = 0, line = this;
    line.totals.forEach(function (total) {
        if (total >= (3 * line.min - 2)) {
            count += 1;
        } else if (total >= (3 * line.min - 4) && total > 1 && line.surprising > 0) {
            count += 1;
            line.surprising -= 1;
        }
    });
    return count;
};

readFile('sample.in', 'ascii', function (err, input) {
    var ndx, lines, line, count, caseNum = 1;
    lines = input.split('\n');
    lines = lines.splice(1, lines.length - 2);
    lines.forEach(function (line) {
        line = new Line(line);
        count = line.getCount();
        console.log('Case #' + caseNum + ': ' + count);
        caseNum += 1;
    });
});
