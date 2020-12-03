/* HOW TO create custom or reusable HTML elements */

// Constants and variables. For cleaner code sake.
const exampleTemplate = document.createElement('template');
exampleTemplate.innerHTML = `
<header id="example-template">
    <div class="container-page padding-1-5em">
        <nav class="nav-bar flex-row">
            <a class="logo" href="./">elsajyang:/ $</a>
        </nav>
    </div>
</header>
`;

// Create a class that extends an HTML element
class Example extends HTMLElement {
    constructor() {
        super();
    }

    // Runs when custom element is added to DOM
    connectedCallback() {
        console.log("custom element is on the page!");
        this.innerHTML = exampleTemplate.innerHTML;
        // const shadowRoot = this.attachShadow({ mode: 'open' });
        // shadowRoot.appendChild(exampleTemplate.content);
    }
}

// Create a custom HTML element
// Give the custom element a DOM String name. 
// The name must contain a dash and be words separated by dashes
customElements.define("example-template", Example);

// There are two ways to add custom elements to the DOM
// 1. Add the tag, e.g. <example-template></example-template> 
// manually to each .html file
// 2. Append it by calling the line:
// document.body.appendChild(
//     document.createElement("example-template");
// );

// Lastly, add this script to each .html file using <script>
// It is best practice to put JS <script> tags just before
// the end of the closing </body> tag since HTML loads 
// line by line from top to bottom