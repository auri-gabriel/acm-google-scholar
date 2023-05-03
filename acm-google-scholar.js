// ==UserScript==
// @name         Open Google Scholar Links in New Tabs
// @namespace    https://example.com/
// @version      1
// @description  Adds a button to open all the Google Scholar links in the list in new tabs
// @author       Auri Gabriel
// @match        https://dl.acm.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Find all Google Scholar links in the list
    var links = document.querySelectorAll('ol.references__list a.google-scholar');

    // Create a button to open all the links in new tabs
    var button = document.createElement('button');
    button.textContent = 'Open Google Scholar Links in New Tabs';
    button.addEventListener('click', function() {
        for (var i = 0; i < links.length; i++) {
            window.open(links[i].href, '_blank');
        }
    });

    // Insert the button before the list
    var list = document.querySelector('ol.references__list');
    list.parentNode.insertBefore(button, list);
})();
