// 1. Insert footer as HTML text
var footer = `<footer id="site-footer">
<div class="container-footer padding-3em-1-5em">
    <div class="footer-bar flex-col">
        <section class="social">
            <p class="terminal first-line">elsayang:/ visitor$ cat socials.txt</p>
            <address class="terminal">
                <a href="mailto:elsajy@gmail.com?subject=elsajyang.github.io: ">elsajy@gmail.com</a>
                <br><a href="https://github.com/elsajyang" target="_blank" rel="noopener" title="My general GitHub" >github.com/elsajyang</a>
            </address>
        </section>
        <section class="site-description">
            <p class="terminal">elsayang:/ visitor$ cat README.md
                <br>Inspired by terminal UX/UI.
                <br>Built in HTML and CSS from scratch.
                <br>Developed in <a class="coding-tools" href="https://code.visualstudio.com/" target="_blank" title="Visual Studio Code is a code editor created by Microsoft.">VSCode</a> using <a class="coding-tools" href="https://nodejs.org/en/" target="_blank" title="Node.js executes JavaScript code outside a web browser. Built on Chrome's V8 JavaScript engine.">Node.js</a>.
                <br>Hosted by <a class="coding-tools" href="https://pages.github.com/" target="_blank" title="GitHub Pages hosts static websites directly from (files in) a GitHub repository.">GitHub Pages</a>.
                <br><a href="https://github.com/elsajyang/elsajyang.github.io" target="_blank" title="">Open source code</a> for this site.
                <!-- <br>Read about this website's dev process. -->
            </p>
        </section>
        <hr>
        <section class="copyright">
            <p>No Copyright 2020 elsajyang.</p>
            <p>Feel free to use whatever you'd like from my site, and credit me or any creators I may have referenced that inspired you.<span class="cursor">▇</span></p>
        </section>
    </div>
</div>
</footer>`;
var main = document.getElementsByTagName('main');
main[0].insertAdjacentHTML("afterend", footer);
console.log("Successfully rendered site-footer. See /js/site-footer.js for more.");

// 2. (UNUSED) Create a custom site-footer element
// const footerTemplate = document.createElement('template');
// footerTemplate.innerHTML = `
// <footer id="site-footer">
//     <div class="container-footer padding-3em-1-5em">
//         <div class="footer-bar flex-col">
//             <section class="social">
//                 <p class="terminal first-line">elsayang:/ visitor$ cat socials.txt</p>
//                 <address class="terminal">
//                     <a href="mailto:elsajy@gmail.com?subject=elsajyang.github.io: ">elsajy@gmail.com</a>
//                     <br><a href="https://github.com/elsajyang" target="_blank" rel="noopener" title="My general GitHub" >github.com/elsajyang</a>
//                 </address>
//             </section>
//             <section class="site-description">
//                 <p class="terminal">elsayang:/ visitor$ cat README.md
//                     <br>Inspired by terminal UX/UI.
//                     <br>Built in HTML and CSS from scratch.
//                     <br>Developed in <a class="coding-tools" href="https://code.visualstudio.com/" target="_blank" title="Visual Studio Code is a code editor created by Microsoft.">VSCode</a> using <a class="coding-tools" href="https://nodejs.org/en/" target="_blank" title="Node.js executes JavaScript code outside a web browser. Built on Chrome's V8 JavaScript engine.">Node.js</a>.
//                     <br>Hosted by <a class="coding-tools" href="https://pages.github.com/" target="_blank" title="GitHub Pages hosts static websites directly from (files in) a GitHub repository.">GitHub Pages</a>.
//                     <!-- <br>Open source code in a <a href="" title=""> repo</a>. -->
//                     <!-- <br>Read about this website's dev process. -->
//                 </p>
//             </section>
//             <hr>
//             <section class="copyright">
//                 <p>No Copyright 2020 elsajyang.</p>
//                 <p>Feel free to use whatever you'd like from my site, and credit me or any creators I may have referenced that inspired you.<span class="cursor">▇</span></p>
//             </section>
//         </div>
//     </div>
// </footer>
// `;

// class SiteFooter extends HTMLElement {
//     constructor() {
//         super();
//     }

//     // Runs when custom element is added to DOM
//     connectedCallback() {
//         console.log("Successfully rendered custom site-footer element. See js/example.js for info.");
//         this.innerHTML = footerTemplate.innerHTML;
//     }
// }

// customElements.define('site-footer', SiteFooter);