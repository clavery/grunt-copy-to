# grunt-copy-to

Like grunt-contrib-copy but only copies files that are newer and maintains modified times for copied files. Useful for creating build directories that can be later synced using tools that rely on file modified times.

## Getting Started
Install this grunt plugin next to your project's [Gruntfile.js gruntfile][getting_started] with: `npm install grunt-copy-to`

Then add this line to your project's `Gruntfile.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-copy-to');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation

```javascript
copyto: {
  stuff: {
    files: [
      {cwd: 'stuffdir/', src: ['**/*'], dest: 'build/'}
    ],
    options: {
      // array of ignored paths, can be specific files or a glob
      ignore: [
        'stuffdir/**/*.bak',
        'stuffdir/dontcopyme.txt'
      ]
    }
  }
}
```

## Release History

0.0.3 - Add ignore array

0.0.2 - Tests

0.0.1 - Initial Release

## License
Copyright (c) 2013 Charles Lavery  
Licensed under the MIT license.
