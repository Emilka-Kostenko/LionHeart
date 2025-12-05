let slideIndex = 1;
if (document.getElementsByClassName("slideshow").length > 0) {
slideshow(slideIndex);
}

function plusSlides(n) {
slideshow(slideIndex += n);
}

function currentSlide(n) {
slideshow(slideIndex = n);
}

function slideshow(n) {
let i;
let slides = document.getElementsByClassName("slideshow");
let dots = document.getElementsByClassName("dot");
if (slides.length === 0) return; // Safety check

if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}

let flkty = new Flickity('.main-gallery', {
cellAlign: 'left',
contain: true,
freeScroll: true,
wrapAround: true
})