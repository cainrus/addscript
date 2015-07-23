'use strict';

QUnit.test('addScript', function( assert ) {

    var done1 = assert.async();
    var done2 = assert.async();
    var key = Math.random();

    addScript("data:text/javascript;,window['" + key + "']=true;", function () {
        assert.equal( window[key], true, "Script was loaded and executed" );
        done1();
    });

    var script = document.head.children[document.head.children.length - 1];
    setTimeout(function () {
        assert.notOk(script.parentNode, 'Script is removed from dom after execution');
        done2()
    }, 50);

});