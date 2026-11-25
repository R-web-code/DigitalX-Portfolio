/* =========================================
   DIGITALX - JAVASCRIPT
   ========================================= */


/* MOBILE NAVIGATION */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

    });


    // Close menu after clicking a navigation link

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute("aria-label", "Open navigation");

        });

    });


    // Close menu when clicking outside

    document.addEventListener("click", (event) => {

        if (
            !menuToggle.contains(event.target) &&
            !navLinks.contains(event.target)
        ) {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute("aria-label", "Open navigation");

        }

    });

}



/* TYPING ANIMATION */

const typingText = document.getElementById("typing-text");

const words = [
    "Digital Future.",
    "Web Development.",
    "Artificial Intelligence.",
    "Creative Technology."
];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    if (!typingText) {
        return;
    }

    const currentWord = words[wordIndex];

    if (deleting) {

        charIndex--;

    } else {

        charIndex++;

    }

    typingText.textContent = currentWord.substring(0, charIndex);


    let speed = deleting ? 50 : 100;


    if (!deleting && charIndex === currentWord.length) {

        deleting = true;

        speed = 1500;

    }

    else if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

        speed = 400;

    }


    setTimeout(typeEffect, speed);

}


if (typingText) {

    typeEffect();

}



/* SCROLL REVEAL ANIMATION */

const revealElements = document.querySelectorAll(

    '.about, .skills, .projects, .contact, .section-heading, .project-card, .skill-card, .contact-card'

);


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-active");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.12

    });


    revealElements.forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });

} else {

    // Fallback for older browsers

    revealElements.forEach((element) => {

        element.classList.add("reveal-active");

    });

}
// Formspree Contact Form

window.formspree = window.formspree || function () {
    (formspree.q = formspree.q || []).push(arguments);
};

formspree("initForm", {
    formElement: "#contact-form",
    formId: "mqpqndel"
});