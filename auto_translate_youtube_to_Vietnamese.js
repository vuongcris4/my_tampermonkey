// ==UserScript==
// @name         Youtube auto translate to Vietnamese
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  translate to Vietnamese automatically.
// @author       jono76
// @match        https://www.youtube.com/watch*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function translateToVietnamese(){
        var sub = $('[role="menuitem"]:contains("Subtitles")');
        if(!sub.length) return;
        sub.click();
        var subc = $('[role="menuitemradio"]:contains("Vietnamese")');
        if (subc.length) {
            subc.click();
        } else {
            var autoTrans = $('[role="menuitemradio"]:contains("Auto-translate")');
            if (!autoTrans.length) return;
            autoTrans.click();
            var autoTransC = $('[role="menuitemradio"]:contains("Vietnamese")');
            if (!autoTransC.length) return;
            autoTransC.click();
        }
    }

    function onLoadStart(){
        $('.ytp-subtitles-button[aria-pressed="false"]').click();
        $('.ytp-settings-button').click();
		setTimeout(function() { translateToVietnamese();; }, 2000);
        $('.ytp-settings-button').click();
    }
    $('video').on('loadstart', onLoadStart).trigger('loadstart');
})();