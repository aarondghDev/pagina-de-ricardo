// Detectamos cuando se hace scroll
window.onscroll = function() {
    let banner = document.getElementById("banner");
    // let bscroll = document.getElementById("bscroll");

    let screenWidth = window.innerWidth;  // Obtener el ancho de la pantalla

    // Si el scroll supera la posición inicial del banner (100px), hacemos que se quede fijo en la parte superior
    if (screenWidth >= 768){
      if (window.scrollY >= 190) {
        banner.style.position = 'fixed';
        banner.style.top = '0';  // El banner se pega al top cuando el scroll supera los 100px
      } else {
        banner.style.position = 'absolute';  // Si no ha superado el scroll, el banner vuelve a su posición original
        banner.style.top = '190px';  // Mantiene la posición inicial
      }
    }
    else if (screenWidth <= 768){
      if (window.scrollY >= 320 ) {
        banner.style.position = 'fixed';
        banner.style.top = '0';   
      } else {
        banner.style.position = 'absolute';
        banner.style.top = '320px'; 
      }
    }
  };

  // Detecta cambio de tamaño de pantalla y actualiza el comportamiento del banner si es necesario
window.onresize = function() {
  let banner = document.getElementById("banner"); 
  if (window.innerWidth <= 768.00001 && window.scrollY >= 320) {
    banner.style.top = '0px'; 
    banner.style.position = 'fixed'; 
  }
  else if (window.innerWidth >= 768.1 && window.scrollY <= 190) {
    banner.style.top = '190px'; 
    banner.style.position = 'absolute'; 
  }
  else if (window.innerWidth <= 768.0001 && window.scrollY <= 320) {
    banner.style.top = '320px'; 
    banner.style.position = 'absolute'; 
  }
  
  else if(window.innerWidth >= 768.0001) {
    banner.style.top = '0px'; 
    banner.style.position = 'fixed'; 
  }  

};