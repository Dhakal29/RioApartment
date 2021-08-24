

function increment() {
    document.getElementById('demoInput_Adult').stepUp();
 }
 function decrement() {
    document.getElementById('demoInput_Adult').stepDown();
 }
 function increment() {
    document.getElementById('demoInput_Kid').stepUp();
 }
 function decrement() {
    document.getElementById('demoInput_Kid').stepDown();
 }
 
 
//  Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".links");
const body = document.querySelector('body');
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("activelink");
    navMenu.classList.toggle("activelink");
    body.classList.toggle("body-overflow-y");

    
}

const navLink = document.querySelectorAll(".links");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("activelink");
    navMenu.classList.remove("activelink");
}


// Apartment rooms calendar
function hideshow(){
   document.getElementById('rooms-cal').style.display = 'block';
   document.getElementById('see-more-btn').style.display = 'none';
   document.getElementById('apartment-room-arrow').style.display = 'block';
   for(let element of document.getElementsByClassName('rooms')){
       element.style.display = 'none';
   }
}   
function apartroomBack(){
   document.getElementById('rooms-cal').style.display = 'none';
   document.getElementById('see-more-btn').style.display = 'block';
   document.getElementById('apartment-room-arrow').style.display = 'none';
   for(let element of document.getElementsByClassName('rooms')){
       element.style.display = 'block';
   }
}  


// Each room junior suite, standard, superior dates and show more
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) { slideIndex = 1 }
if (n < 1) { slideIndex = slides.length }
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
}
function bookNow(){                         
document.getElementById('book-now-btn').style.display = 'none';
document.getElementById('each_img_room_spec').style.display = 'none';
for(let element of document.getElementsByClassName('booking-form')){
    element.style.display = 'block';
}
}
var seemore_status = "less";
function amenity_more(){
    if( seemore_status == "less"){
        document.getElementById('amenity_seemore_id').innerHTML = 'Show less';
        for(let element of document.getElementsByClassName('amenity-left')){
            element.style.display = 'inline-flex';
        }
        for(let element of document.getElementsByClassName('amenity-h2')){
            element.style.display = 'block';
        }
        for(let element of document.getElementsByClassName(' amenity')){
            element.style.display = 'inline-block';
            
        }
       
        seemore_status = "more";
    }
    else if(seemore_status == "more"){
        document.getElementById('amenity_seemore_id').innerHTML = 'Show More';
        for(let element of document.getElementsByClassName('amenity-left')){
            element.style.display = 'none';
        }
        for(let element of document.getElementsByClassName('amenity-h2')){
            element.style.display = 'none';
        }
        for(let element of document.getElementsByClassName(' amenity')){
            element.style.display = 'inline-flex';
        }
        
        seemore_status = "less";

    }
}  

