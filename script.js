const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.style.boxShadow = window.scrollY > 30 ? "0 8px 30px rgba(0,0,0,.25)" : "none";
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: 0.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
document.querySelectorAll(".price-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    modalTitle.textContent = btn.dataset.plan.toUpperCase();
    modal.classList.add("open");
  });
});
document.getElementById("modalClose").addEventListener("click", () => modal.classList.remove("open"));
modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("open"); });

document.getElementById("planForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("planMessage").textContent = "Request received! Our team will contact you shortly.";
  e.target.reset();
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "Thanks! Your free trial request has been received.";
  e.target.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:"smooth"});
    }
  });
});
