'use strict';

require('chai').should();
var clock = require('../sources/berlinuhr');

describe('Berlin Uhr', function () {

    it('should be midnight', function () {
        clock.time('00:00:00').should.equal('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
    });

    it('should be midnight and 1 second', function(){
        clock.time('00:00:01').should.equal('O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
    });

    it('should be midnight and 1 minute', function(){
        clock.time('00:01:00').should.equal('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYOOO');
    });

    it('should be midnight and 2 minutes', function(){
        clock.time('00:02:00').should.equal('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYOO');
    });

    it('should be midnight and 5 minutes', function(){
        clock.time('00:05:00').should.equal('Y\nOOOO\nOOOO\nYOOOOOOOOOO\nOOOO');
    });

    it('should be midnight and 10 minutes', function(){
        //clock.time('00:10:00').should.equal('Y\nOOOO\nOOOO\nYYOOOOOOOOO\nOOOO');
    });

});
