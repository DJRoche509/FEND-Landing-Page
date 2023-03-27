# Udacity Project 4: Landing-Page (FEND)
Project Creation of a landing page recommended by Udacity FEND program


## Objective

1) Build and add full functionality to a single landing page.
2) Similate a real world scenrio of manipulating the DOM.
3) Navigation is built dynamically as an unordered list using Append, appendChild, and innerHTML.
4) Each section is being clearly viewed while scrolling through the page.
5) Ensure that the link for each navigation item from menu scrolls to the corresponding section when a click is emitted. 

<br><br> 
### - A screenshot of landing page from the top

<img src="https://user-images.githubusercontent.com/100164051/227867831-0d5f5c8c-7373-47b5-8e45-933a1b674538.png" width="500" height="450">
 <br><br><br>
 
 ### - Another screenshot of landing page within mid-section of the page.

<img src="https://user-images.githubusercontent.com/100164051/227871004-8ef82d66-d05c-4acb-a0e3-27406feaf897.png" width="500" height="450">
 <br><br><br>
 
## About:
This landing page is a project created for Udacity's Front-End Web development Nanodegree. 
By definition, a landing page is a single web page that appears in response to commonly clicking or scrolling on a search engine or a virtual link. 
Thus comes the term dynamic. This page provides an user-friendly and interactive navigational experience.


## Process:
This dynamicity to this page was made possible using JavaScript scripting in concert with an HTML and CSS files to manipulate the DOM. During writing the script, one 
of the primary steps taken after declaring global variables was to build the Navigation Bar Menu. A for loop was used within a function set in "const dynamicNavBar" 
that loops through every section present in the HTML and for each section creates a list element. This list element is added to an empty navigation bar that was already 
defined as an unordered list element. Concurrently, it loops through to get navigation data, id, and set/create elements such a \<li\>, class attribute names, and a \<a\> link
for each navigation item. Each list element was used to add a link according to which section is in theviewport.
This link is added listening to the click event and using the scrollIntoView() function to scroll into the section of the navigation bar that we click. Additionally, 
when a section is in the viewport a class called "your-active-class" is added to the body section and another class "top-menu-btn-active" is also added to the 
corresponding list item of the navigation bar menu which distinguishes the section in view and at the same time highlights the section in the navigation bar.
 
  
