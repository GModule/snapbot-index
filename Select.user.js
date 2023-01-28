// ==UserScript==
// @name         Select
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://web.snapchat.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=snapchat.com
// @grant        none
// ==/UserScript==

(function() {
    setInterval(function () {document.getElementsByClassName("Ewflr")[15].click();}, 1500);
})();