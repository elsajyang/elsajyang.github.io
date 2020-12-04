// site-header adds scripts: js/`hamburger`.js

// 1. Insert header as HTML text
var header = `
<header id="site-header">
    <div class="container-page padding-1-5em">
        <nav class="nav-bar flex-row">
            <a class="logo" href="/">elsajyang:/ $</a>
            <button class="hamburger hamburger--stack" type="button">
                <div class="inner">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </button>
            <div id="site-nav" class="toggle-nav-menu nav-menu flex-row">
                <a class="logo" href="/">elsajyang:/ $</a>
                <a href="/about.html">/about.md</a>
                <a href="/projects.html">/projects</a>
                <a href="/posts.html">/posts</a>
            </div>
        </nav>
    </div>
</header>
`;
var main = document.getElementsByTagName('main');
main[0].insertAdjacentHTML("beforebegin", header);
console.log("Successfully rendered site-header. See /js/site-header.js for more.");

addScript('text/javascript', '/js/hamburger.js', true);
console.log("Successfully added hamburger menu script. See /js/site-header.js for more.");

/* Helper Functions */
function addScript(type, src, defer) {
    var script = document.createElement('script');
    script.type = type;
    script.src = src;
    script.defer = defer;
    document.body.appendChild(script);
}

// 2. (UNUSED) Create a custom site-header element
// const headerTemplate = document.createElement('template');
// headerTemplate.innerHTML = `
// <header id="site-header">
//     <div class="container-page padding-1-5em">
//         <nav class="nav-bar flex-row">
//             <a class="logo" href="./">elsajyang:/ $</a>
//             <button class="hamburger hamburger--stack" type="button">
//                 <div class="inner">
//                     <span class="bar"></span>
//                     <span class="bar"></span>
//                     <span class="bar"></span>
//                 </div>
//             </button>
//             <div id="site-nav" class="toggle-nav-menu nav-menu flex-row">
//                 <a class="logo" href="./">elsajyang:/ $</a>
//                 <a href="about.html">/about.md</a>
//                 <a href="projects.html">/projects</a>
//                 <a href="posts.html">/posts</a>
//             </div>
//         </nav>
//     </div>
// </header>
// `;

// class SiteHeader extends HTMLElement {
//     constructor() {
//         super();
//     }

//     // Runs when custom element is added to DOM
//     connectedCallback() {
//         console.log("Successfully rendered custom site-header element. See js/example.js for info.");
//         this.innerHTML = headerTemplate.innerHTML;
//     }
// }

// customElements.define("site-header", SiteHeader);