'use strict';

/**
 * Load a JavaScript file from the server using a GET HTTP request, then execute it.
 *
 * @param {string} url
 * @param {Function} [callback]
 *   callback will be called once on script loaded/executed/request completed event.
 */
var addScript = function (url, callback) {

    var script = document.createElement('script');
    var head = document.getElementsByTagName('head')[0]; // IE<9.
    var called = 0;

    script.onload = script.onreadystatechange = function () {
        if (!called++ && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
            script.onload = script.onreadystatechange = null;
            head.removeChild(script);
            if (typeof callback === 'function') {
                callback();
            }
        }
    };

    script.src = url;
    head.appendChild(script);
};