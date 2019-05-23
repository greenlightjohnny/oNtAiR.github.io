const topnav = document.querySelector('.topnav');
const navlogo = document.querySelector('.navlogo');
const shrink = document.querySelector('.shrink');
const navbg = document.querySelector('.navbg')


function shrinkNav() {
    if(window.scrollY >= 1) {
        navlogo.classList.add('shrink');
        topnav.classList.add('navbg');
    } else {
        navlogo.classList.remove('shrink');
        topnav.classList.remove('navbg');
    }
}

window.addEventListener('scroll', shrinkNav);



const menuOpen = document.querySelector('.menuOpen');
const mobileNav = document.querySelector('.mobileNav');
const slideX = document.querySelector('.slideX');

function slideOut() {
    mobileNav.classList.toggle('slideIn')
}

menuOpen.addEventListener('click', slideOut);
slideX.addEventListener('click', slideOut);