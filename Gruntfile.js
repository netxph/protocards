'use strict'

module.exports = function(grunt) {
   
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'app/{,*/}*.html'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: 'app',
                }
            }
        }
    });

    grunt.registerTask('server', 'About project.', function() {
        grunt.log.write('Launching Cards 2.0.0 Web Application');

        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });
}
