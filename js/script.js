window.onscroll = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () =>{
  if(window.scrollY > 80){
      document.querySelector('.header .header-2').classList.add('active');
  }else{
      document.querySelector('.header .header-2').classList.remove('active');
  }
}

var swiper = new Swiper(".best-slider", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
});