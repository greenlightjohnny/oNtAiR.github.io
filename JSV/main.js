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
console.log(barOne);

function slideOut() {
    mobileNav.classList.toggle('slideIn');
    barOne.classList.toggle('topA');
    barTwo.classList.toggle('middleA');
    barThree.classList.toggle('bottomA');
    
}

menuOpen.addEventListener('click', slideOut);


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



/////////////////// Fix mobile nav for landscape mode /////////




