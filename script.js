const toggleMenu = () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu")
    const menu = hamburgerMenu.firstElementChild;
    const icon = hamburgerMenu.lastElementChild;

    menu.classList.toggle("open")
    icon.classList.toggle("open")
}