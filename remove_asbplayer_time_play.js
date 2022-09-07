// ==UserScript==
// @name         Remove asbplayer timeplay
// @namespace    https://github.com/vuongcris4
// @version      0.1
// @description  Use this to remove time play
// @author       vuongcris4
// @match        https://killergerbah.github.io/asbplayer/
// @grant        none
// ==/UserScript==

var timer = setInterval(function () {
    elem = document.getElementsByClassName("MuiGrid-root jss70 MuiGrid-container")[0];
    if (elem.className == 'MuiGrid-root jss70 MuiGrid-container') {

        elem.style.display = "none";    // hide time play

        elem1 = document.getElementsByClassName("jss84"); // Time info
        for (const ele of elem1) {
            ele.style.display = "none";
        }

        elem1 = document.getElementsByClassName("jss85"); // Copy info
        for (const ele of elem1) {
            ele.style.display = "none";
        }

        try {
            ele = document.getElementById("migaku-toolbar-po-parse");   // Parse migaku
            ele.click();

        }
        catch (err) {
        }

        document.addEventListener('keydown', (e) => {   //select movie button
            if (e.key.toLowerCase() === 'v') {
                ele = document.getElementsByClassName("MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit")[1];
                ele.click();
            }
        });

        clearInterval(timer);
    }
}, 1000);

