
'use strict';

// phantomjs mocha-phantomjs-core.js <TESTS> <REPORTER> <CONFIG as JSON>

let page = require('webpage').create();
page.settings.resourceTimeout = 10000; 

page.open('https://www.github.com', function(status) {
    console.log(status);
    phantom.exit();
    phantom.kill();
});

page.onError = function (msg, trace) {
    console.log(msg);
    trace.forEach(function(item){
        console.log('  ', item.file, ':', item.line);
    });
    phantom.exit();
    phantom.kill();
};

phantom.onError = function (msg, trace) {
    console.log(msg);
    trace.forEach(function(item){
        console.log('  ', item.file, ':', item.line);
    });
    phantom.exit();
    phantom.kill();
};
