module.exports = function (grunt) {
  'use strict';
  grunt.config('sass', {
    options: {
      sourceMap: true,
      outputStyle: 'compressed'
    },
    dist: {
      files: {
        'public/stylesheets/main.css': 'stylesheets/imports.scss'
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
};
