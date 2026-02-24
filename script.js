// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const toggleIcon = themeToggle.querySelector(".toggle-icon");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  toggleIcon.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", theme);
}

// Load saved theme or default to light
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "light" ? "dark" : "light");
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Pause animations until elements are visible
document
  .querySelectorAll(".product-card, .benefit-card, .step-card, .faq-item")
  .forEach((el) => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });

// Header shadow on scroll
const header = document.querySelector(".header");
window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 4px 30px rgba(0,0,0,0.15)";
    } else {
      header.style.boxShadow = "none";
    }
  },
  { passive: true },
);
