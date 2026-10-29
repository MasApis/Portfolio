const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
   const isHidden = menuList.classList.toggle("hidden");
   menuIcon.setAttribute("aria-expanded", String(!isHidden));
});

menuList.querySelectorAll("a").forEach((link) => {
   link.addEventListener("click", () => {
      if (window.innerWidth <= 900 && !menuList.classList.contains("hidden")) {
         menuList.classList.add("hidden");
         menuIcon.setAttribute("aria-expanded", "false");
      }
   });
});