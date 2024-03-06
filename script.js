console.log('Hello webflow!');

//id='line-#'

const menu = document.getElementById('mobile-menu');
const line3 = document.getElementById('line-3');

menu.addEventListener('click', () => {
    line3.setAttribute('width', '9.2986e-08');
});
