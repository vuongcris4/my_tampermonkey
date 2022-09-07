// ==UserScript==
// @name         Text selectable Xemphim.vip
// @namespace    http://www.chaochaogege.com
// @version      0.1
// @description  Use this script to select text
// @author       You
// @match        https://xemphim.vip/watch/*
// @grant        none
// @require https://greasyfork.org/scripts/402597-monitor-dom-change/code/monitor%20dom%20change.js?version=801281
// ==/UserScript==

setInterval(make_subtitles_selectable, 250);
function make_subtitles_selectable(){
    elem= document.getElementsByClassName("vjs-text-track-cue vjs-text-track-cue-en")[0].childNodes[0];
    if(elem!=null){
        elem.style.zIndex = 1000;
        elem.style.display = 'block';
        elem.style.userSelect="text";
        elem.style.cursor="text";
        elem.style.pointerEvents="auto";
        elem.setAttribute("selectable", "true");
    }
}
