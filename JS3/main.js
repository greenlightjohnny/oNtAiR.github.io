


//Fade out landing page on scroll//
const opacityAnchor = document.querySelector('.opacityAnchor').offsetTop;
function fadeOnScroll() {
    if(window.pageYOffset > 0) {
        const opacity = (window.pageYOffset / opacityAnchor);
        
        const beeBackground = document.querySelector('#top');
        beeBackground.style.background = "linear-gradient(rgba(255, 255, 255, " + (opacity / 2) + "), rgba(255, 255, 255, " + (opacity) + ")), url('./IMG/art50-min.jpg')", "background-position: center", "background-size: cover", "background-repeat: no-repeat";
    }
}




/////////////// STICK NAV ////////////////////////////

const nav = document.querySelector('#mainNav');


function stickyNav() {
    const anch = document.querySelector('.anch');
    const anchPos = anch.offsetTop;
    console.log(anchPos)
    const navPos = nav.offsetTop;
    if(window.pageYOffset >= anchPos) {
        nav.classList.add('stickyNav')
    } else {
        nav.classList.remove('stickyNav');
    }
}

////////////////////////////// MOBILE MENU OPEN CLOSE /////////////////////


let ham = document.querySelector('.ham');
let close = document.querySelector('.slideX')
let mobileNav = document.querySelector('.mobileNav');

function slideIn() {
    
    
    mobileNav.classList.add('slideIn')
}

function slideOut() {
    mobileNav.classList.remove('slideIn');
}

let items = document.querySelectorAll('.mobileNav a')


items.forEach(i => i.addEventListener('click', slideOut));
close.addEventListener('click', slideOut);
ham.addEventListener('click', slideIn);

window.addEventListener('scroll', stickyNav);
window.addEventListener('scroll', fadeOnScroll);