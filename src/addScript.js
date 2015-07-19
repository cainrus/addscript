'use strict';

/**
 * Load a JavaScript file from the server using a GET HTTP request, then execute it.
 *
 * @param {string} url
 * @param {Function} [success]
 *   success callback.
 */
var addScript = function (url, success) {

    var script = document.createElement('script');
    var head = document.getElementsByTagName('head')[0];
    var done = false;

    script.onload = script.onreadystatechange = function () {

        if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {

            done = true;
            if (success) {
                success();
            }

            script.onload = script.onreadystatechange = null;
            head.removeChild(script);
        }

    };

    script.src = url;
    head.appendChild(script);
};