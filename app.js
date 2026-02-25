// document.getElementById("btn").addEventListener("click", () => {
//   alert("Bienvenido a Carwash 🚗");
// });

let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {

  slides.forEach(slide => slide.classList.remove("active"));

  slides[index].classList.add("active");

  index++;

  if(index >= slides.length){
    index = 0;
  }
}

setInterval(showSlide, 3000);
showSlide();