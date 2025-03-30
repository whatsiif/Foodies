let nav = document.querySelector(".nav-wrap");

window.onscroll = function(){
    if(document.documentElement.scrollTop > 520){
        nav.classList.add("scroll-on");
        
    }else {
        nav.classList.remove("scroll-on");
    }
}

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function(e){
    e.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})


