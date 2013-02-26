'use strict';

var grunt = require('grunt');
var _ = require('lodash');

describe('copy-to', function() {

  var options = {
  };

  beforeEach(function() {
    grunt.file.mkdir(__dirname + '/build');
  });

  afterEach(function() {
    grunt.file.delete(__dirname + '/build');
  });

  it('should initialize', function() {
  });
});
