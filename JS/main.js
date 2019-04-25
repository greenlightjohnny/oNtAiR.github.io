const ul = document.querySelector('.title').offsetTop;
const scrollu = document.querySelector('.opacityanchor').offsetTop;
const docheight = document.querySelector('#top').scrollHeight;
const spped = docheight / 1;
console.log(docheight);


function scrollFade() {
    if (window.pageYOffset > 0) {
        
        const opacity = (window.pageYOffset / scrollu);
        const beeImage = document.body.querySelector('#top');
        console.log(opacity);
        beeImage.style.background = "linear-gradient(rgba(255, 255, 255, " + (opacity / 2) + "), rgba(255, 255, 255, " + (opacity ) + ")), url('./Images/a50.jpg')";
    }
}



window.addEventListener('scroll', scrollFade);