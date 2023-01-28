// ==UserScript==
// @name         Select Test V1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://web.snapchat.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=snapchat.com
// @grant        none
// ==/UserScript==

function group() {

    document.getElementsByClassName("Ewflr")[11].click();
document.getElementsByClassName("Ewflr")[12].click();
    document.getElementsByClassName("Ewflr")[15].click();
document.getElementsByClassName("Ewflr")[16].click();
    document.getElementsByClassName("Ewflr")[19].click();
document.getElementsByClassName("Ewflr")[20].click();
    document.getElementsByClassName("Ewflr")[22].click();
document.getElementsByClassName("Ewflr")[25].click();
document.getElementsByClassName("Ewflr")[26].click();
}

(function() {
    setInterval(function () { group() }, 1500);
})();