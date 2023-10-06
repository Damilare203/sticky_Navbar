const headerContainer = document.querySelector('.header_container');
const navbarEl = document.querySelector('.navbar')

window.onscroll = () => {
    if (window.scrollY > 100) {
        headerContainer.classList.add('nav-active');
        navbarEl.classList.add('nav-active');
    } else {
        headerContainer.classList.remove('nav-active');
        navbarEl.classList.remove('nav-active');

    }
}