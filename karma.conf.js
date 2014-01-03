'use strict'

//Karma configuration

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'app/vendor/angular/angular.js',
            'app/vendor/angular-route/angular-route.js',
            'app/vendor/angular-mocks/angular-mocks.js',
            'app/scripts/*.js',
            'app/scripts/controllers/*.js',
            'app/scripts/services/*.js',
            'test/spec/controllers/*.js'
        ],
        exclude: [],
        port: 9001,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false
    });
}
