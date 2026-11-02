const menuBtn = document.getElementById("menu-btn");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");
const backdrop = document.getElementById("menu-backdrop");

function setMenu(open) {
    menuBtn.classList.toggle("open", open);
    mobileMenu.classList.toggle("open", open);
    backdrop.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    mobileMenu.setAttribute("aria-hidden", String(!open));
    backdrop.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
}

menuBtn.addEventListener("click", () => {
    setMenu(!mobileMenu.classList.contains("open"));
});

menuClose.addEventListener("click", () => {
    setMenu(false);
    menuBtn.focus();
});

backdrop.addEventListener("click", () => setMenu(false));

mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900 && mobileMenu.classList.contains("open")) {
        setMenu(false);
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
        setMenu(false);
        menuBtn.focus();
    }
});

document.getElementById("year").textContent = new Date().getFullYear();
