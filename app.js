
    const toggleButton = document.getElementById('toggle-button');
    const NavList =document.getElementById('nav-list');


    toggleButton.addEventListener('click',() =>{

        NavList.classList.toggle('active');

        toggleButton.classList.toggle('is-active');

    })

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
