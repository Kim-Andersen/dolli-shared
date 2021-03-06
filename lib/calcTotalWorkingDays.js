// @flow

const moment = require('moment');

const calcTotalWorkingDays = function(start: Date, end: Date, numNonWorkingDays?: number = 0) : number {
	start = moment(start);
	end = moment(end);
	return end.diff(start, 'days') + 1 - numNonWorkingDays;
};

module.exports = calcTotalWorkingDays;
