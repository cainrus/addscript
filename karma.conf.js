module.exports = function (config) {

    if (process.env.SAUCE_ACCESS_KEY && process.env.SAUCE_USERNAME) {
        karmaOpts.plugins.push('karma-sauce-launcher');
        karmaOpts.customLaunchers = customLaunchers;
        karmaOpts.browsers = Object.keys(customLaunchers);
        karmaOpts.sauceLabs = {
            testName: 'addscript'
        };
        karmaOpts.reporters.push('saucelabs');

    } else {
        karmaOpts.plugins.push('karma-phantomjs-launcher');
        karmaOpts.phantomjsLauncher = {
            exitOnResourceError: true
        };
        karmaOpts.browsers = ['PhantomJS']
    }

    config.set(karmaOpts);
};

var customLaunchers = [
    {
        browserName: 'internet explorer',
        version: '7',
        platform: 'Windows XP'
        , base: 'SauceLabs'
    },
    {
        browserName: 'internet explorer',
        version: '8',
        platform: 'Windows XP'
        , base: 'SauceLabs'
    },
    {
        browserName: 'internet explorer',
        version: '9',
        platform: 'Windows 7'
        , base: 'SauceLabs'
    },
    {
        browserName: 'internet explorer',
        version: '10',
        platform: 'Windows 7'
        , base: 'SauceLabs'
    },
    {
        browserName: 'internet explorer',
        version: '11',
        platform: 'Windows 8'
        , base: 'SauceLabs'
    },
    {browserName: 'safari', version: '8', platform: 'Mac 10.10', base: 'SauceLabs'},
    {
        browserName: 'firefox',
        version: '38',
        platform: 'Windows 7'
        , base: 'SauceLabs'
    },
    {
        browserName: 'firefox',
        version: '39',
        platform: 'Windows 7'
        , base: 'SauceLabs'
    },
    {
        browserName: 'chrome',
        version: '41',
        platform: 'Windows 7'
        , base: 'SauceLabs'
    },
    {
        browserName: 'chrome',
        version: '42',
        platform: 'Windows 7'
        , base: 'SauceLabs'
    },
    {
        browserName: 'chrome',
        version: '43',
        platform: 'Windows 7'
        , base: 'SauceLabs'
    },
    {browserName: 'opera', version: '12', platform: 'Windows XP', base: 'SauceLabs'},
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

var karmaOpts = {
    basePath: '',
    frameworks: ['qunit'],

    plugins: [
        'karma-coverage',
        'karma-coveralls',
        'karma-qunit',
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

    singleRun: true,
    autoWatch: true,
    reporters: ['progress', 'coverage'],
    // optionally, configure the reporter
    coverageReporter: {
        type: 'lcovonly',
        dir: process.cwd() + '/coverage/',
        subdir: '.'
    },
    browserDisconnectTimeout : 10000, // default 2000
    browserDisconnectTolerance : 1, // default 0
    browserNoActivityTimeout : 4*60*1000, //default 10000
    captureTimeout : 4*60*1000 //default 60000
};
