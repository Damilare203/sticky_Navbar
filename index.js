const headerContainer = document.querySelector('.header_container');

window.onscroll = () => {
    if (window.scrollY > 100) {
        headerContainer.classList.add('nav-active');
    } else {
        headerContainer.classList.remove('nav-active');
    }
}