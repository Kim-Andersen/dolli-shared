// @flow

import moment from 'moment';

const calcTotalWorkingDays = (start: Date, end: Date, numNonWorkingDays?: number = 0) : number => {
	start = moment(start);
	end = moment(end);
	return end.diff(start, 'days') + 1 - numNonWorkingDays;
};

module.exports = calcTotalWorkingDays;
