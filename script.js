let themeButton = document.querySelector(".theme-icon");
let header = document.querySelector('header');
let qrCode = document.querySelector('.qr_code_generator');
let features = document.querySelector('.features');
let types = document.querySelector('.qr_code_types');
let pricing = document.querySelector('.pricing');
let span = document.querySelector('span');
let logo = document.querySelector('.logo');
let pricePlanButtons = document.querySelectorAll('.price-plan-btn');
let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    if (nav.style.display == 'none') {
        nav.style.display = 'flex'
    } else {
        nav.style.display = 'none'
    }
})

themeButton.addEventListener("click", () => {
    if (header.getAttribute('data-theme')) {
    header.removeAttribute('data-theme');
    qrCode.removeAttribute('data-theme');
    features.removeAttribute('data-theme');
    types.removeAttribute('data-theme');
    pricing.removeAttribute('data-theme');
    span.removeAttribute('data-theme');
    logo.removeAttribute('data-theme');

    pricePlanButtons.forEach(btn => {
        btn.removeAttribute('data-theme');
    });
    } else {
    header.setAttribute('data-theme', 'dark');
    qrCode.setAttribute('data-theme', 'dark');
    features.setAttribute('data-theme', 'dark');
    types.setAttribute('data-theme', 'dark');
    pricing.setAttribute('data-theme', 'dark');
    span.setAttribute('data-theme', 'dark');
    logo.setAttribute('data-theme', 'dark');
    pricePlanButtons.forEach(btn => {
        btn.setAttribute('data-theme', 'dark');
    });
    }
});