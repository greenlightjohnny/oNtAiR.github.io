const topnav = document.querySelector('.newNav');
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

const navLinks = document.querySelectorAll('mobileNav a');
const barOne = document.querySelector('.topBar');
const barTwo = document.querySelector('.middleBar');
const barThree = document.querySelector('.bottomBar');
const subLinks = document.querySelectorAll('.mobileNav .mm a');
const navLink = document.querySelectorAll('mobileNav a');


function slideOut() {
    mobileNav.classList.toggle('slideIn'); 
    barOne.classList.toggle('topA');
    barTwo.classList.toggle('middleA');
    barThree.classList.toggle('bottomA');
    
}

menuOpen.addEventListener('click', slideOut);
subLinks.forEach(i => i.addEventListener('click', slideOut));


////////////////////////////////////// Catalog image slider //////////////

const triggerRight = document.querySelectorAll('.attempt .right');
const triggerLeft = document.querySelectorAll('.attempt .left');

function showNext() {
  
  let parent = this.parentNode;
  let photos = parent.previousElementSibling;
  
  
  
  ///finds which photo is currently being shown ////////////
  current = photos.querySelector('.active');
  
  
  /////finds the next sibling img, or the first child if it is the end and ads active ///
  current.nextElementSibling ? current.nextElementSibling.classList.add('active') :
  photos.firstElementChild.classList.add('active');
  current.classList.remove('active');
  }

function showPrevious() {

  let parent = this.parentNode;
  let photos = parent.previousElementSibling;
  current = photos.querySelector('.active');

  current.previousElementSibling ? current.previousElementSibling.classList.add('active') :
  photos.lastElementChild.classList.add('active');
  current.classList.remove('active');
}
triggerRight.forEach(i => i.addEventListener('click', showNext));
triggerLeft.forEach(i => i.addEventListener('click', showPrevious));



/////////////////// close sub menu from hover /////////

const subMenu = document.querySelectorAll('.sub-menu');
const subLi = document.querySelectorAll('.sub-menu li');
const subA = document.querySelectorAll('.mobileNav a');



const lastA = document.querySelectorAll('.lastA');

function onHover() {

   
  
   const subs = this.lastElementChild;
   subs.classList.add('subTransform');
   subLi.forEach(i => i.classList.add('subTransform'));
}

function onLeave() {
  const subs = this.lastElementChild;
   subs.classList.remove('subTransform');
   subLi.forEach(i => i.classList.remove('subTransform'));
}

function onClick() {
  
  subA.forEach(i => i.classList.remove('subTransform'));
  this.parentElement.parentElement.classList.remove('subTransform');
}

subA.forEach(i => i.addEventListener('click', onClick));
lastA.forEach(i => i.addEventListener('mouseenter', onHover));
lastA.forEach(i => i.addEventListener('mouseleave', onLeave));


const mobileA = document.querySelectorAll('.mobileNav a');

mobileA.forEach(i => i.addEventListener('click', slideOut));




