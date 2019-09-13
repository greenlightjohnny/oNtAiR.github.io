
//Fade out landing page on scroll//
const opacityAnchor = document.querySelector('.opacityAnchor').offsetTop;
function fadeOnScroll() {
    if(window.pageYOffset >= 0 & window.innerWidth > 599) { 
        const opacity = (window.pageYOffset / opacityAnchor);
        
        const beeBackground = document.querySelector('header');
        beeBackground.style.background = "linear-gradient(rgba(253, 253, 253, " + (opacity / 2) + "), rgba(253, 253, 253, " + (opacity) + ")), url('./IMG3/art50ss.jpg')";
    } else if(window.pageYOffset >= 0 & window.innerWidth <= 599) {
        const opacity = (window.pageYOffset / opacityAnchor);
        
        const beeBackground = document.querySelector('header');
        beeBackground.style.background = "linear-gradient(rgba(253, 253, 253, " + (opacity / 2) + "), rgba(253, 253, 253, " + (opacity) + ")), url('./IMG3/art50-mobile.jpg')", "background-position: center", "background-size: cover", "background-repeat: no-repeat";
    }
} 

window.addEventListener('scroll', fadeOnScroll);
window.addEventListener('resize', fadeOnScroll);





/////// menu open close //////////

let menu = document.querySelector(".menuIcon");
let menuList = document.querySelector("nav ul");
const menuT = document.querySelector(".ham");
const menuItems = document.querySelectorAll('nav li a');

console.log(menuItems);

function menuToggle() {
    menuList.classList.toggle('showMenu');
    menu.classList.toggle('menuMove');
    

    menu.classList.toggle('open');
    console.log(this)

}
menu.addEventListener('click', menuToggle)
menuItems.forEach(i => i.addEventListener('click', menuToggle));

///////// Box shadow menu sticky Nav ////////

const navAnch = document.querySelector('.navAnch');
const navBar = document.querySelector('nav');

function addShadow() {
    const navOffset = navAnch.offsetTop;
    console.log(navOffset);
    console.log(window.pageYOffset);
    if(window.pageYOffset >= navOffset) {
        navBar.classList.add('addShadow');
    } else navBar.classList.remove('addShadow');
}

window.addEventListener('scroll', addShadow);


////////// Smooth Scroll //////////
