// export function getImageWidth() {
//   return window.innerWidth <= 768 ? 500 : 600; 
//   Si la pantalla es ≤768px usa 300px, sino 600px
// }

export function getImageWidth() {
  const width = window.innerWidth;
  
  if (width <= 550) return 300;
  if (width <= 768) return 500;
  return 600;
}
export function getMaxTranslateX() {
  return -getImageWidth() * 2; // Ajusta según la cantidad de imágenes visibles
}

export function updateCarousel(carouselRef, index) {
  if (carouselRef.current) {
    const imageWidth = getImageWidth();
    const maxTranslateX = getMaxTranslateX();
    let translateX = -index * imageWidth;

    if (translateX < maxTranslateX) {
      translateX = maxTranslateX;
    }

    carouselRef.current.style.transform = `translateX(${translateX}px)`;
  }
}

export function nextImage(index, maxMoves) {
  return index < maxMoves - 1 ? index + 1 : 0;
}

export function prevImage(index, maxMoves) {
  return index > 0 ? index - 1 : maxMoves - 1;
}

