let index = 0;

const track = document.querySelector(".carousel-track");

const slides = document.querySelectorAll(".slide");

function moverCarrusel(){

    index++;

    if(index >= slides.length){
        index = 0;
    }

    track.style.transform = "translateX(-" + (index * 100) + "%)";

}

setInterval(moverCarrusel, 5000);