// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

menuBtn.onclick = () => {

nav.classList.toggle("active");

menuBtn.innerHTML = nav.classList.contains("active")

? '<i class="fa-solid fa-xmark"></i>'

: '<i class="fa-solid fa-bars"></i>';

};

// Close Menu

document.querySelectorAll(".nav-links a").forEach(link=>{

link.onclick=()=>{

nav.classList.remove("active");

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

}

});

// Navbar Background

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="#050505ee";

}else{

header.style.background="rgba(0,0,0,.55)";

}

});

// Scroll Reveal

const reveals=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

reveals.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

if(top<window.innerHeight-120){

sec.classList.add("active");

}

});

});

reveals.forEach(sec=>sec.classList.add("reveal"));

// Intro Screen

const loader = document.getElementById("loader");

function hideLoader() {

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
    loader.style.pointerEvents = "none";
}

// Auto hide after 2.5 seconds
window.addEventListener("load", () => {
    setTimeout(hideLoader, 2500);
});

// Skip when user clicks or taps
loader.addEventListener("click", hideLoader);
loader.addEventListener("touchstart", hideLoader);

// Skip with keyboard
window.addEventListener("keydown", hideLoader);