const navbarToggler = document.querySelector('.navbar__top--toggler');
const navbarCollapse = document.querySelector('.navbar__collapse');

navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('change');
    navbarCollapse.classList.toggle('show__nav');
});