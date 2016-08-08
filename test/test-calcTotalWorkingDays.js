'use strict;'

import moment from 'moment';
var expect = require('chai').expect;
import { calcTotalWorkingDays } from '../lib';

describe('#calcTotalWorkingDays', function() {
  const start = moment();

  it('should return 0 when given no arguments', () => {
    expect(calcTotalWorkingDays()).to.equal(1);
  });

  it('should return 1 when given a start date only', () => {
    expect(calcTotalWorkingDays(start)).to.equal(1);
  });

  it('should return 1 when passed idential start and end', () => {
    expect(calcTotalWorkingDays(start, start)).to.equal(1);
  });

  it('should return 2 when passed a 2-day range', () => {
    expect(calcTotalWorkingDays(start, start.clone().add(1, 'days'))).to.equal(2);
  });

  it('should return 1 when passed a 2-day range with 1 non-working day', () => {
    expect(calcTotalWorkingDays(start, start.clone().add(1, 'days'), 1)).to.equal(1);
  });

  it('should accept native javascript date types', () => {
    expect(calcTotalWorkingDays(start.toDate(), start.clone().add(2, 'days').toDate())).to.equal(3);
  });

});
