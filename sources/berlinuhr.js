'use strict';

module.exports = {
    time: function(timeString){
        var midnight = '\nOOOO\nOOOO\n';
        var second = this.getSecond(timeString);
        var minute = this.getMinute(timeString);

        return second + midnight + minute;
    },
    getSecond: function(timeString){
        return parseInt(timeString[7]) % 2 === 0 ? 'Y' : 'O';
    },
    getMinute: function(timeString) {
        var result = 'OOOO';
        for (var i = 0; i < parseInt(timeString[4]) % 5; i++) {
            result = result.substr(0, i) + 'Y' + result.substr(i + 1);
        }
        var minutesBy5 = 'OOOOOOOOOOO\n';
        if (parseInt(timeString[4]) === 5) {
            minutesBy5 = 'Y' + minutesBy5.substring(1);
        }
        return minutesBy5 + result;
    }
};
