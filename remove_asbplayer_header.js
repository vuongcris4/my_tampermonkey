// ==UserScript==
// @name         Remove asbplayer header
// @namespace    https://github.com/vuongcris4
// @version      0.1
// @description  Use this to remove asbplayer header
// @author       vuongcris4
// @match        https://killergerbah.github.io/asbplayer/
// @grant        none
// ==/UserScript==


var delayInMilliseconds = 1000; //1 second

setTimeout(function() { //remove header
    elem = document.getElementsByClassName("MuiPaper-root MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary jss28 MuiPaper-elevation0")[0];
    elem.remove();
    elem = document.getElementsByClassName("jss49")[0]; //Header
    elem.style.height = "100vh";
    elem = document.getElementsByClassName("jss53")[0]; //Header
    elem.style.height = "100vh";
}, delayInMilliseconds);

