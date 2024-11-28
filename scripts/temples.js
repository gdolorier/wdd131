
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
    navMenu.querySelector('ul').classList.toggle('active');
});