/////// menu open close //////////

let menu = document.querySelector(".menuIcon");
let menuList = document.querySelector("nav ul");
const barOne = document.querySelector('.topBar');
const barTwo = document.querySelector('.middleBar');
const barThree = document.querySelector('.bottomBar');


function menuToggle() {
    menuList.classList.toggle('showMenu');
    menu.classList.toggle('menuMove');
    barOne.classList.toggle('topA');
    barTwo.classList.toggle('middleA');
    barThree.classList.toggle('bottomA')
}
menu.addEventListener('click', menuToggle)

console.log(menu);