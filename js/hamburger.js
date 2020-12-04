// A script that styles hamburger menus 
// and the responsive site navigation menu

// Variables and constants
let mql = window.matchMedia('only screen and (max-width: 800px)');
var dimBackdrop = document.getElementById('dim-backdrop');
var hamburger = document.querySelector('button.hamburger');
var siteNavMenu = document.getElementById('site-nav');

// nav-menu is flex-row by default
// toggle-nav-menu is flex-col
if (mql.matches) {
	siteNavMenu.classList.remove('nav-menu', 'flex-row');
	siteNavMenu.classList.add('toggle-nav-menu', 'flex-col');
} else {
	siteNavMenu.classList.remove('toggle-nav-menu', 'flex-col');
	siteNavMenu.classList.add('nav-menu', 'flex-row');
}

// Clicking on hamburger icon toggles nav menu
hamburger.addEventListener('click', function() {
	hamburger.classList.toggle('active');
	siteNavMenu.classList.toggle('slide-left');
	dimBackdrop.classList.toggle('hidden');
});

// Clicking on backdrop closes nav menu
dimBackdrop.addEventListener('click', function() {
	hamburger.classList.toggle('active');
	siteNavMenu.classList.toggle('slide-left');
	dimBackdrop.classList.add('hidden');
});

// Screen size determines which nav menu is displayed
// Screens smaller than 800px must toggle the menu
mql = window.matchMedia('only screen and (max-width: 800px)');
mql.addEventListener("change", (screen) => {
	// Check if the screen width fulfills media query
	if (screen.matches) {
		siteNavMenu.classList.remove('nav-menu', 'flex-row');
		// On a screen resize, we need to hide menu animations
		siteNavMenu.classList.add('toggle-nav-menu', 'flex-col');
	} else {
		siteNavMenu.classList.remove('toggle-nav-menu', 'flex-col');
		dimBackdrop.classList.add('hidden');
		siteNavMenu.classList.add('nav-menu', 'flex-row');
	}
});

// Helper Functions
function toggle(elementID, property, val1, val2) {
	(function(style, property, val1, val2) {
		style[property] = style[property] === val1 ? val2 : val1;
	})(document.getElementById(elementID).style, property, val1,val2);
}
