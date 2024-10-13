// ==UserScript==
// @name         Amazon Prime VideoのNext Upを非表示にするユーザースクリプト
// @namespace    skyblue3350
// @version      1.0.1
// @description  次の回へ誘導するポップアップを非表示にします
// @author       skyblue3350
// @match        https://www.amazon.co.jp/gp/video/detail*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(() => {
        const nextCard = Array.from(document.querySelectorAll("div")).find(item => item.className.includes("nextupcard-wrapper"))
        nextCard.style.visibility = "hidden"
    }, 3000)
})();
