console.log('Hello webflow!');

//id='line-#'

const menu = document.getElementById('mobile-menu');
const line3 = document.getElementById('line-3');
const line2 = document.getElementById('line-2');

menu.addEventListener('mouseover', () => {
    line3.setAttribute('x1', '9.2986e-08');
    line2.setAttribute('x1', '9.2986e-08');
});
