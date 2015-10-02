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
    {browserName: 'android', version: '4.0', platform: 'Linux', base: 'SauceLabs'}
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
