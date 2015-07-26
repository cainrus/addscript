module.exports = function (config) {
    // Example set of browsers to run on Sauce Labs
    // Check out https://saucelabs.com/platforms for all browser/platform combos
 /*   var customLaunchers = {
        sl_chrome: {
            base: 'SauceLabs',
            browserName: 'chrome',
            platform: 'Mac',
            version: '46'
        },
        //sl_firefox: {
        //    base: 'SauceLabs',
        //    browserName: 'firefox',
        //    version: '30'
        //},
        //sl_ios_safari: {
        //    base: 'SauceLabs',
        //    browserName: 'iphone',
        //    platform: 'OS X 10.9',
        //    version: '7.1'
        //},
        //sl_ie_11: {
        //    base: 'SauceLabs',
        //    browserName: 'internet explorer',
        //    platform: 'Windows 8.1',
        //    version: '11'
        //}
    };*/

    config.set({
        basePath: '',
        frameworks: ['qunit'],

        plugins: [
            'karma-coverage',
            'karma-coveralls',
            'karma-qunit',
            'karma-phantomjs-launcher'
        ],

        files: [
            'src/*.js',
            'dist/*.js',
            'test/test.js'
        ],

        preprocessors: { 'src/*.js': ['coverage'] },

        port: 9876,
        colors: true,


        // The rest of your karma config is here
        // ...
        //sauceLabs: {
        //    testName: 'addscript'
        //},
        //customLaunchers: customLaunchers,
        //browsers: Object.keys(customLaunchers),
        //reporters: ['dots', 'saucelabs'],
        browsers: ['PhantomJS'],
        singleRun: true,
        autoWatch: true,
        reporters: ['progress', 'coverage'],
        // optionally, configure the reporter
        coverageReporter: {
            type: 'lcovonly',
            dir: process.cwd() + '/coverage/',
            subdir: '.'
        },

        phantomjsLauncher: {
            exitOnResourceError: true
        }

    });
};