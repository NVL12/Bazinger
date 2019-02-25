var slideIndex = 1;
showSlide(slideIndex);
function plusSlide(n) {
    showSlide(slideIndex += n);
}
function showSlide(n) {
    var slides = document.getElementsByClassName("slide-content");
    var dots = document.getElementsByClassName("btn-dot-slide");
    if (n > slides.length) 
        slideIndex = 1;
    if (n < 1) 
        slideIndex = slides.length;
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].style.backgroundColor = "rgba(255,255,255,0)";
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].style.backgroundColor = "blue";
}