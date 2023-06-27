let nav= document.querySelector(".navbar");
window.onscroll= function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}


let navBar=document.querySelectorAll(".nav-link");
let navcolapse=document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navcolapse.classList.remove("show");

    })
})