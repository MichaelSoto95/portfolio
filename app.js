
const toggleButton = document.getElementById('toggle-button');
const NavList = document.getElementById('nav-list');


toggleButton.addEventListener('click', () => {

    NavList.classList.toggle('active');

    toggleButton.classList.toggle('is-active');

})
function closeNav() {
    NavList.classList.remove('active');
    toggleButton.classList.remove('is-active');



}

//se puede hacer para que aparezcan las cosas
const nav = document.querySelector('.navbar')
const infoText = document.getElementById('info-text');
const infoIcon = document.getElementById('info-icon');
const Main = document.querySelector('.main-container')
const About = document.querySelector('.about-container')
const Card = document.getElementById('Cards');
const Info = document.querySelector('.info-container')

const NavAbout = document.getElementById('nav-about');
const NavInfo = document.getElementById('nav-info');
const NavContact = document.getElementById('nav-contact');
window.addEventListener('scroll', fixNav)
function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('nav-active')


    } else {
        nav.classList.remove('nav-active')

    }

    if (window.scrollY > Main.offsetHeight - 100) {

        Card.classList.add('active-info');
        NavAbout.classList.add('li-active');

    } else {

        Card.classList.remove('active-info');
        NavAbout.classList.remove('li-active');
    }

    if (window.scrollY > About.offsetHeight) {

        infoText.classList.add('active-info');
        infoIcon.classList.add('active-info');
        NavInfo.classList.add('li-active');

    } else {

        infoText.classList.remove('active-info');
        infoIcon.classList.remove('active-info');
        NavInfo.classList.remove('li-active');
    }


}


    // let lastScrollTop = 0;

    // // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    // element.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
    //    let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    //    if (st > lastScrollTop) {
    //   alert("top");
    //    } else if (st < lastScrollTop) {
    //       // upscroll code
    //       alert("bottom");
    //    } // else was horizontal scroll
    //    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    // }, false);
//     const links = document.querySelectorAll(" .ul .a");
// for (const link of links) {
//   link.addEventListener("click", clickHandler);
// }
// function clickHandler(e) {
//   e.preventDefault();
//   const href = this.getAttribute("href");
//   const offsetTop = document.querySelector(href).offsetTop;
//   scroll({
//     top: offsetTop,
//     behavior: "smooth"
//   });
// }

    // const Mydiv=document.getElementById("mydiv");
// const topCount =25;

// function makeActive(){
//    Mydiv.classList.add(".active");
//    Mydiv.innerHTML="This is Active";
// }

// function btncolor(){

//     Mydiv.style.backgroundColor='yellow';
//     Mydiv.style.left=topCount+'px'
//     Mydiv.style.top='144px'
//     // document.getElementById("mydiv").style.scale='1.66';
//     let element = document.createElement('H1');
// element.innerText='Hiiii'.toUpperCase();
// document.body.appendChild(element); 

// }
// function btncolor2(){

// const element = document.getElementById("newId");
//    element.classList.add("active");
//   element.innerHTML="This is Active";
// }
