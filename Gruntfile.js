'use strict'

module.exports = function(grunt) {
   
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true
            }
        }
    });

    grunt.registerTask('about', 'About project.', function() {
        grunt.log.write('Cards - a flexible visual task management');
    });
}
