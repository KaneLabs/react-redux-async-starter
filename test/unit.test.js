const { describe, it } = require('mocha');

const { expect } = require('chai');

const server = require('../src/index.js');

describe('server', () => {
  it ('exists', () =>{
    expect(server).to.exist;
  });
});
