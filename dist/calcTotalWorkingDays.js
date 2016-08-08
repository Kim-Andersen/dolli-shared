'use strict';

var moment = require('moment');

var calcTotalWorkingDays = function calcTotalWorkingDays(start, end) {
	var numNonWorkingDays = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

	start = moment(start);
	end = moment(end);
	return end.diff(start, 'days') + 1 - numNonWorkingDays;
};

module.exports = calcTotalWorkingDays;