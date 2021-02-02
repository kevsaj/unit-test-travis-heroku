require('mocha');

const { expect } = require('chai');
// eslint-disable-next-line no-unused-vars
const server = require('../server');

// eslint-disable-next-line no-console
console.log('running test: against server.js');

// eslint-disable-next-line no-undef
describe('title: This is the title of the test', () => {
  // eslint-disable-next-line no-undef
  it('this simple test checks equality for a string', () => {
    expect('Test CI with Travis').to.equal('Test CI with Travis');
  });
});
