'use strict';
var addScript = require('../');
var test = require('tape');

test('callback is called', function (t) {
    t.plan(1);
    var key = Math.random();
    addScript("data:text/javascript;,window['" + key + "']=true;", function () {
        t.true(window[key]);
    });
});

test('removed from head after call', function (t) {
    t.plan(1);
    addScript("data:text/javascript;,");
    var script = document.head.children[document.head.children.length - 1];
    setTimeout(function () {
        t.notOk(script.parentNode);
    }, 50);
});