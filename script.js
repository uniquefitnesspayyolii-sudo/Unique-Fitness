// =========================================
// MOBILE MENU
// =========================================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

if (menuBtn && nav) {

    menuBtn.onclick = () => {

        nav.classList.toggle("active");

        menuBtn.innerHTML = nav.classList.contains("active")
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    };

}


// Close menu when clicking navigation link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.onclick = () => {

        if (nav) nav.classList.remove("active");

        if (menuBtn) {
            menuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';
        }

    };

});


// =========================================
// NAVBAR BACKGROUND
// =========================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 80) {

        header.style.background = "#050505ee";

    } else {

        header.style.background = "rgba(0,0,0,.55)";

    }

});


// =========================================
// SCROLL REVEAL
// =========================================

const reveals = document.querySelectorAll("section");

reveals.forEach(sec => {
    sec.classList.add("reveal");
});

window.addEventListener("scroll", () => {

    reveals.forEach(sec => {

        const top = sec.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            sec.classList.add("active");

        }

    });

});


// =========================================
// COMPACT ACCORDION
// =========================================

const infoCards = document.querySelectorAll(".info-card");

infoCards.forEach(card => {

    const button = card.querySelector(".info-header");

    button.addEventListener("click", () => {

        const isOpen = card.classList.contains("open");

        // Close every other section
        infoCards.forEach(otherCard => {
            otherCard.classList.remove("open");
        });

        // Open clicked section
        if (!isOpen) {
            card.classList.add("open");
        }

    });

});


// =========================================
// INTRO SCREEN
// =========================================

const loader = document.getElementById("loader");

function hideLoader() {

    if (!loader) return;

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
    loader.style.pointerEvents = "none";

}


// Auto hide
window.addEventListener("load", () => {

    setTimeout(hideLoader, 2500);

});


// Skip intro by tap/click
if (loader) {

    loader.addEventListener("click", hideLoader);

    loader.addEventListener("touchstart", hideLoader);

}


// Skip intro with keyboard
window.addEventListener("keydown", hideLoader);