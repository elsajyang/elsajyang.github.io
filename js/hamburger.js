// A script that styles a responsive 
// hamburger style site navigation menu

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
	siteNavMenu.classList.remove('slide-left');
	dimBackdrop.classList.add('hidden');
});

// Screen size determines which nav menu is displayed
// Screens smaller than 800px must use the toggle menu
mql = window.matchMedia('only screen and (max-width: 800px)');
mql.addEventListener("change", (screen) => {
	// Check if the screen width fulfills media query
	if (screen.matches) {
		// Maintain state of window even upon resizing
		// If toggle menu was open upon resizing, restore state
		if (siteNavMenu.classList.contains('slide-left')) {
			dimBackdrop.classList.remove('hidden');
		}
		siteNavMenu.classList.remove('nav-menu', 'flex-row');
		siteNavMenu.classList.add('toggle-nav-menu', 'flex-col');
	} else {
		siteNavMenu.classList.remove('toggle-nav-menu', 'flex-col');
		// Always hide nav menu backdrop in the absence of toggle menu
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
