// ==UserScript==
// @name         Toggle Migaku (hide/show)
// @namespace    https://github.com/vuongcris4
// @version      0.1
// @description  Use this to hide/show migaku
// @author       vuongcris4
// @match        *://*/*
// @grant        none
// ==/UserScript==

var timer = setInterval(function () {
  x = document.getElementsByClassName("migaku-toolbar-container-element")[0];
  if (x.className == 'migaku-toolbar-container-element') {
    x.style.display = 'none';

    function toggle_migaku() {
      if (x.style.display === 'none') {
        x.style.display = 'block';
        x.click();
      } else {
        x.style.display = 'none';
      }
    }

    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() == 'm') {
        toggle_migaku();
      }
    });

    clearInterval(timer);
  }
}, 100);