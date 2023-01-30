
    const toggleButton = document.getElementById('toggle-button');
    const NavList =document.getElementById('nav-list');


    toggleButton.addEventListener('click',() =>{

        NavList.classList.toggle('active');

        toggleButton.classList.toggle('is-active');

    })

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
