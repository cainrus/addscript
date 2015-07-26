'use strict';

test("addScript success callback", function (assert) {

    var done = assert.async();
    var key = Math.random();

    addScript("data:text/javascript;,window['" + key + "']=true;", function () {
        assert.equal(window[key], true, "Script was loaded and executed");
        done();
    });

});

test("addScript clean up", function (assert) {

    var done = assert.async();
    var script;
    var head = document.getElementsByTagName('head')[0];

    addScript("data:text/javascript;", function () {
        console.log(script)
        assert.notOk(script.parentNode, 'Script is removed from dom after execution');
        done();
    });
    script = head.children[head.children.length - 1];
    assert.equal(script.parentNode, head, 'Script is in document.head')
});