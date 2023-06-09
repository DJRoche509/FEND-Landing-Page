/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBarMenu = document.getElementById("navbar__list"); // empty unordered list
const navBarMenuSections = document.querySelectorAll("section"); // creates an array and add items to it for each section in the document
let navBarMenuItems = navBarMenuSections.length;
// const listlinks = document.querySelectorAll(".navbar__menu a"); // links in the navbar
/**
 * End Global Variables
 * Begin Main Functions
 *
 */

// build the nav

const dynamicNavBar = () => {
    // function to dynamically add items to the nav bar list
    for (navBarMenuSection of navBarMenuSections) {
        navBarMenuSectionName = navBarMenuSection.getAttribute("data-nav");
        navBarMenuSectionLink = navBarMenuSection.getAttribute("id");
        navBarMenuListItem = document.createElement("li");
        navBarMenuListItem.setAttribute('id', `top-section${navBarMenuSectionName.slice(-1)}`);
        navBarMenuListItem.innerHTML = `<a class='menu__link' href='#${navBarMenuSectionLink}'>${navBarMenuSectionName}</a>`;
        navBarMenu.appendChild(navBarMenuListItem);
    }
};

// Add class 'active' to section when near top of viewport

const sectionInViewport = (view) => {
    // determine if section is near top of viewport
    let sectionxy = view.getBoundingClientRect();
    return sectionxy.top <= 150 && sectionxy.bottom >= 150;
};

const addActiveClass = () => {
    // function to add active class to viewed section
    for (navBarMenuSection of navBarMenuSections) {
        if (sectionInViewport(navBarMenuSection)) {
            if (!navBarMenuSection.classList.contains("your-active-class")) {
                navBarMenuSection.classList.add("your-active-class");
                //if Section contains class 'active', then targetSectionID finds the id of that section
                const targetSectionID = navBarMenuSection?.getAttribute('id');
                if (targetSectionID){
                    // Get and set the corresponding id for each nav item as "top-section?"
                    const targetMenuTop = document.getElementById('top-' + targetSectionID);
                    // Add "top-menu-btn-active" class to active nav item
                    targetMenuTop?.classList.add('top-menu-btn-active');
                }
            }
        } else {
            navBarMenuSection.classList.remove("your-active-class");
            const targetSectionID = navBarMenuSection?.getAttribute('id');
                if (targetSectionID){
                    const targetMenuTop = document.getElementById('top-' + targetSectionID);
                    // Remove "top-menu-btn-active" class to inactive nav item
                    targetMenuTop?.classList.remove('top-menu-btn-active');
                }
        }
    }
};

// Scroll smoothly to section on anchor click

const smoothScroll = () => {
    document.querySelectorAll(".menu__link").forEach((anchor) => {
        // selects all anchors with class='menu__link'
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(anchor.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
};
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

dynamicNavBar();

// Scroll to section on link click

smoothScroll();

// Set sections as active

document.addEventListener("scroll", addActiveClass);