document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

const body = document.body;
const toggle = document.querySelector("[data-menu-toggle]");
const panel = document.querySelector("[data-menu-panel]");
const navLinks = document.querySelectorAll(".nav-links a");
const mobileQuery = window.matchMedia("(max-width: 1100px)");

function setMenu(open) {
  body.classList.toggle("menu-open", open);
  if (toggle) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
}

if (toggle) {
  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    setMenu(!body.classList.contains("menu-open"));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setMenu(false);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

document.addEventListener("click", (event) => {
  if (!body.classList.contains("menu-open")) return;
  if (panel?.contains(event.target) || toggle?.contains(event.target)) return;
  setMenu(false);
});

mobileQuery.addEventListener("change", (event) => {
  if (!event.matches) setMenu(false);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
