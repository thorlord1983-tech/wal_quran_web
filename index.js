// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});

// =========================
// CLOSE MENU AFTER CLICK
// =========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

// =========================
// NAVBAR SHADOW ON SCROLL
// =========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "#0b6e4f";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    } else {

        navbar.style.background = "rgba(11,110,79,.95)";
        navbar.style.boxShadow = "none";

    }

});

// =========================
// SCROLL REVEAL
// =========================

const reveals = document.querySelectorAll("section");

function revealSections() {

    const trigger = window.innerHeight - 100;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// =========================
// CONTACT FORM
// =========================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your free trial request has been received. We will contact you soon.");

        form.reset();

    });

}

// =========================
// HERO BUTTON ANIMATION
// =========================

const button = document.querySelector(".btn");

if (button) {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

}

// =========================
// YEAR IN FOOTER
// =========================

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}

// =========================
// COURSE CARD ANIMATION
// =========================

const cards = document.querySelectorAll(".course-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// =========================
// WELCOME MESSAGE
// =========================

console.log("Welcome to Wal Qalaam Quran Academy");