module.exports = function (config) {

    config.set({
        basePath: '',
        frameworks: ['qunit'],

        plugins: [
            'karma-coverage',
            'karma-coveralls',
            'karma-qunit',
            'karma-sauce-launcher'
        ],

        files: [
            'src/*.js',
            'dist/*.js',
            'test/test.js'
        ],

        preprocessors: {'src/*.js': ['coverage']},

        port: 9876,
        colors: true,


        sauceLabs: {
            testName: 'addscript'
        },
        customLaunchers: customLaunchers,
        browsers: Object.keys(customLaunchers),

        singleRun: true,
        autoWatch: true,
        reporters: ['progress', 'saucelabs', 'coverage'],
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

var customLaunchers = [
    {
        browserName: 'internet explorer',
        version: '7',
        platform: 'Windows 2003'
        , base: 'SauceLabs'
    },
    {
        browserName: 'internet explorer',
        version: '8',
        platform: 'Windows 2003'
        , base: 'SauceLabs'
    },
    {
        browserName: 'internet explorer',
        version: '9',
        platform: 'Windows 2008'
        , base: 'SauceLabs'
    },
    {
        browserName: 'internet explorer',
        version: '10',
        platform: 'Windows 2012'
        , base: 'SauceLabs'
    },
    {
        browserName: 'internet explorer',
        version: '11',
        platform: 'Windows 2012 R2'
        , base: 'SauceLabs'
    },
    {browserName: 'safari', version: '8', platform: 'Mac 10.10', base: 'SauceLabs'},
    {
        browserName: 'firefox',
        version: '38',
        platform: 'Windows 2012'
        , base: 'SauceLabs'
    },
    {
        browserName: 'firefox',
        version: '39',
        platform: 'Windows 2012'
        , base: 'SauceLabs'
    },
    {
        browserName: 'chrome',
        version: '40',
        platform: 'Windows 2012'
        , base: 'SauceLabs'
    },
    {
        browserName: 'chrome',
        version: '41',
        platform: 'Windows 2012'
        , base: 'SauceLabs'
    },
    {
        browserName: 'chrome',
        version: '42',
        platform: 'Windows 2012'
        , base: 'SauceLabs'
    },
    {
        browserName: 'chrome',
        version: '43',
        platform: 'Windows 2012'
        , base: 'SauceLabs'
    },
    {browserName: 'opera', version: '12', platform: 'Windows 2003', base: 'SauceLabs'},
    {browserName: 'iphone', version: '6.1', platform: 'Mac 10.8', base: 'SauceLabs'},
    {browserName: 'iphone', version: '7.1', platform: 'Mac 10.9', base: 'SauceLabs'},
    {browserName: 'iphone', version: '8.3', platform: 'Mac 10.10', base: 'SauceLabs'},
    {browserName: 'iphone', version: '8.4', platform: 'Mac 10.10', base: 'SauceLabs'},
    {browserName: 'android', version: '4.0', platform: 'Linux', base: 'SauceLabs'},
    {browserName: 'android', version: '4.1', platform: 'Linux', base: 'SauceLabs'},
    {browserName: 'android', version: '4.2', platform: 'Linux', base: 'SauceLabs'},
    {browserName: 'android', version: '4.3', platform: 'Linux', base: 'SauceLabs'},
    {browserName: 'android', version: '4.4', platform: 'Linux', base: 'SauceLabs'},
    {browserName: 'android', version: '5.0', platform: 'Linux', base: 'SauceLabs'},
    {browserName: 'android', version: '5.1', platform: 'Linux', base: 'SauceLabs'}
];