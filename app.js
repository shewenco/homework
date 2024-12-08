let index = 0;

function showSlide() {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  
  index++;
  
  if (index >= totalSlides) {
    index = 0;
  }
  
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// 3 saniyede bir slider'ı değiştir
setInterval(showSlide, 3000);