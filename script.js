const menuButton = document.getElementById("menu-button");
const navbar = document.getElementById("navbar");
const themeButton = document.getElementById("theme-button");
const themeIcon = themeButton.querySelector("i");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
const navLinks = document.querySelectorAll(".navbar a");

// Open and close mobile menu
menuButton.addEventListener("click", () => {
    navbar.classList.toggle("show");

    const menuIcon = menuButton.querySelector("i");

    if (navbar.classList.contains("show")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
});

// Close mobile menu after clicking a link
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navbar.classList.remove("show");

        const menuIcon = menuButton.querySelector("i");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    });
});

// Dark mode
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark");
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
    }
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
}

// Highlight active navigation link while scrolling
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

// Contact form demonstration
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your message has been received. Connect this form to a backend to receive real emails.";

    contactForm.reset();

    setTimeout(() => {
        formMessage.textContent = "";
    }, 5000);
});
