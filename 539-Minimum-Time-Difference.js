/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    const minutes = timePoints.map(time => {
        const [hours, mins] = time.split(':').map(Number);
        return hours * 60 + mins;
    });

    minutes.sort((a, b) => a - b);

    let minDiff = Infinity;

    for (let i = 1; i < minutes.length; i++) {
        minDiff = Math.min(minDiff, minutes[i] - minutes[i - 1]);
    }

    const circularDiff = (1440 - minutes[minutes.length - 1]) + minutes[0];
    minDiff = Math.min(minDiff, circularDiff);
    return minDiff;
};