/* A script for reusable and customizable head meta tags */

// Constants and variables. For cleaner code sake.
const siteTitle = "elsajyang - A Developer's Personal Site";
const author = 'Elsa Yang';
const description = "elsajyang is a developer's personal site for developers. Inspired by terminal UX/UI. Built in HTML and CSS from scratch. Developed in VSCode using Node.js. Hosted by GitHub Pages.";
const url = 'https://elsajyang.github.io';
const siteName = 'elsajyang';

const head = document.head;

function addTitle(siteTitle) {
    var title = document.createElement('title');
    title.innerHTML = siteTitle;
    head.appendChild(title);
}

function addMetaName(name, content) {
    var meta = document.createElement('meta');
    meta.name = name;
    meta.content = content;
    head.appendChild(meta);
}

function addMetaProperty(property, content) {
    var meta = document.createElement('meta');
    meta.setAttribute('property', property);
    meta.content = content;
    head.appendChild(meta);
}

// Title/Tab
addTitle(siteTitle);

// Author
addMetaName('author', author);

// Description
addMetaName('description', description);

// Property: og
addMetaProperty('og:site_name', siteName);
addMetaProperty('og:url', url);
addMetaProperty('og:title', siteTitle);
addMetaProperty('og:description', description);
