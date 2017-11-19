module.exports = function (grunt) {
  'use strict';
  grunt.config('watch', {
    options: {
      livereload: true
    },
    css: {
      files: ['stylesheets/*.scss'],
      tasks: ['sass']
    },
    ejs: {
      files: ['views/**/*.ejs'],
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
};
