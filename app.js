let index = 0;

function showSlide() {
  const slides = document.querySelectorAll('.slides img');
  index++;
  
  if (index >= slides.length) {
    index = 0;
  }
  
  const newTransform = -index * 100;
  document.querySelector('.slides').style.transform = `translateX(${newTransform}%)`;
}

setInterval(showSlide, 3000);