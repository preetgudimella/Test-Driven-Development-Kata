
const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Returns entire string if length of string is less than maxLen argument', () => {
    expect(wrap('Hello World', 11)).to.equal('Hello World')
  });
  it('Wraps the string if the length of the string is greater than maxLen argument', () => {
    expect(wrap('Hello World', 5)).to.equal('Hello\nWorld')
  });
});
