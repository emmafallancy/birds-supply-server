const create = require('../createResolverMap')('parrot');

module.exports = {
  Query: create('queries')
};