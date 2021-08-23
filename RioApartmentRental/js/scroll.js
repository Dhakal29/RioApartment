let scrollable = document.querySelectorAll("booking-form")
window.onscroll = function (){scrollFunction()}

function scrollFunction(){
    const scrolled = window.scrollY;
    if((scrolled> 640) && (scrolled< 684)) {
        for(let element of document.getElementsByClassName('booking-form')){
            element.style.marginTop="97px";
        }   
    }
    else if((scrolled> 684) && (scrolled< 798)) {
        for(let element of document.getElementsByClassName('booking-form')){
            element.style.marginTop="222px";
        }   
    }
    else if((scrolled> 798) && (scrolled < 881)) {
        for(let element of document.getElementsByClassName('booking-form')){
            element.style.marginTop="300px";
        }   
    }
    else if((scrolled> 881) && (scrolled < 1100)) {
        for(let element of document.getElementsByClassName('booking-form')){
            element.style.marginTop="420px";
        }   
    }
    else if((scrolled> 1100)) {
        for(let element of document.getElementsByClassName('booking-form')){
            element.style.marginTop="545px";
        }   
    }
    else if(scrolled< 640){
        for(let element of document.getElementsByClassName('booking-form')){
            element.style.marginTop="0";
        }   
    }
}

