(function () {
    'use strict';
    require('babel-register');

    exports.config = {
        seleniumAddress: 'http://localhost:4444/wd/hub',
        seleniumServerStartTimeout: 10000,
        specs: ['../**-spec.js'],
        params: {
            url: 'https://angularjs.org'
        },
        SELENIUM_PROMISE_MANAGER: 1,
        jasmineNodeOpts: {
            defaultTimeoutInterval: 300000,
            isVerbose: true,
            showColors: true
        },
        capabilities: {
            browserName: 'chrome'
        }
    };
}());