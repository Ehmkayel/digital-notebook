const hamburgerMenu = document.querySelector("#hamburger-menu")
const mobileMenu = document.querySelector("#mobile-menu")
const closeNav = document.querySelector("#close-nav")

hamburgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
    hamburgerMenu.classList.toggle("active")
});

closeNav.addEventListener("click", () => {
    mobileMenu.classList.add("hidden")
    hamburgerMenu.classList.remove("active")
   
});
