module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-ui-router/release/angular-ui-router.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/angular-material/angular-material.min.js',
            'app/bower_components/angular-animate/angular-animate.min.js',
            'app/bower_components/angular-aria/angular-aria.min.js',
            'app/bower_components/angular-messages/angular-messages.min.js',
            'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'app/bower_components/moment/moment.js',
            'app/**/*module.js',
            'app/service/**/*.js',
            'app/input/**/*.js',
            'app/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
