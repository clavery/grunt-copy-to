'use strict';

var grunt = require('grunt');
var _ = require('lodash');
var fs = require('fs');
var path = require('path');

describe('copy-to', function() {

  beforeEach(function() {
  });

  afterEach(function() {
  });

  var toDir = __dirname + '/tmp';
  var fromDir = __dirname + '/test';
  var existingDir = __dirname + '/existing';

  it('should create the destination folder', function() {
    expect(grunt.file.exists(toDir)).toBe(true);
  });

  it('should maintain file modified times', function() {
    var statsFrom = fs.statSync(path.join(fromDir, 'testing.txt'));
    var statsTo = fs.statSync(path.join(toDir, 'testing.txt'));

    expect(statsFrom.mtime).toEqual(statsTo.mtime);
  });

  it('should maintain file modified times on existing files', function() {
    var statsFrom = fs.statSync(path.join(fromDir, 'testing.txt'));
    var statsTo = fs.statSync(path.join(existingDir, 'testing.txt'));

    expect(statsFrom.mtime).toEqual(statsTo.mtime);
  });
});
