console.log("site.js loaded");

const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    if (!dot || !outline) return;

    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";

    outline.style.left = e.clientX + "px";
    outline.style.top = e.clientY + "px";
});

// =========================
// NAVBAR (Transparent -> White on Scroll)
// =========================
const navbar = document.querySelector("#siteNavbar");

function updateNavbar() {
    if (!navbar) return;

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

updateNavbar();
window.addEventListener("scroll", updateNavbar);

// =========================
// SKILL BAR ANIMATION
// =========================
const skillSection = document.querySelector("#services");
const skillBars = document.querySelectorAll(".skill-bar div");

let skillsAnimated = false;

window.addEventListener("scroll", () => {
    if (!skillSection) return;

    const sectionTop = skillSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100 && !skillsAnimated) {
        skillBars.forEach((bar) => {
            const value = bar.getAttribute("data-progress");
            bar.style.width = value + "%";
        });
        skillsAnimated = true;
    }
});
