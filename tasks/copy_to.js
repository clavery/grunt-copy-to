
var _ = require('lodash');

module.exports = function(grunt) {
  'use strict';

  var path = require('path');
  var fs = require('fs');

  grunt.registerMultiTask('copyto', 'Sync files between directories', function() {
    var options = this.options({
      'ignore': [],
    });

    this.files.forEach(function(pair) {

      pair.src.forEach(function(src) {
        var fullpath = pair.orig.cwd + path.sep + src;
        var stats = fs.statSync(fullpath);
        var mtime = stats.mtime.getTime();
        var dest = pair.dest + src;

        if(grunt.file.isMatch(options.ignore, fullpath)) {
          grunt.verbose.writeln('Ignored ' + src.red);
        } else {
          if(stats.isFile()) {
            if(grunt.file.exists(dest)) {
              var destMtime = fs.statSync(dest).mtime.getTime();

              if(destMtime < mtime) {
                grunt.log.writeln('Changed ' + src.green);
                grunt.file.copy(fullpath, pair.dest + src, {});
                fs.utimesSync(dest, stats.mtime, stats.mtime);
              } else {
                grunt.verbose.writeln('Unchanged ' + src.red);
              }
            } else {
              grunt.log.writeln('New File ' + src.green);
              grunt.file.copy(fullpath, dest, {});
              fs.utimesSync(dest, stats.mtime, stats.mtime);
            }
          } else if(stats.isDirectory()) {
            if(!grunt.file.exists(dest)) {
              grunt.log.writeln('Creating ' + src.cyan);
              grunt.file.mkdir(dest);
            } else {
              grunt.verbose.writeln('Exists ' + src.red);
            }
          }
        }
      });
    });
  });
};
