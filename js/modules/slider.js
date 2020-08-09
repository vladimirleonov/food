//    //slider simple 

function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {

   //    let currentSlide = 1;
   //    const slides = document.querySelectorAll('.offer__slide'),
   //       btnPrev = document.querySelector('.offer__slider-prev'),
   //       btnNext = document.querySelector('.offer__slider-next'),
   //       current = document.querySelector('#current'),
   //       total = document.querySelector('#total');

   //    showActiveSlide();

   //    if (slides.length <= 10) {
   //       total.textContent = `0${slides.length}`;
   //    } else {
   //       total.textContent = slides.length;
   //    }

   //    function showActiveSlide(n = 1) {
   //       if (n > slides.length) {
   //          currentSlide = 1;
   //       }

   //       if (n < 1) {
   //          currentSlide = slides.length;
   //       }

   //       // console.log(currentSlide);

   //       slides.forEach((slide) => {
   //          slide.classList.add('hide');
   //          slide.classList.remove('show');
   //       });

   //       slides[currentSlide - 1].classList.add('show');
   //       slides[currentSlide - 1].classList.remove('hide');

   //       if (currentSlide < 10) {
   //          current.textContent = `0${currentSlide}`;
   //       } else {
   //          current.textContent = currentSlide;
   //       }
   //    }


   //    btnPrev.addEventListener('click', () => {
   //       showActiveSlide(currentSlide -= 1);
   //    });

   //    btnNext.addEventListener('click', () => {
   //       showActiveSlide(currentSlide += 1);
   //    });



   //slider hard


   const slides = document.querySelectorAll(slide),
      slider = document.querySelector(container),
      btnPrev = document.querySelector(prevArrow),
      btnNext = document.querySelector(nextArrow),
      current = document.querySelector(currentCounter),
      total = document.querySelector(totalCounter),
      slidesInner = document.querySelector(field),
      slidesWrapper = document.querySelector(wrapper),
      width = window.getComputedStyle(slidesWrapper).width;

   let currentSlide = 1,
      offset = 0;

   if (slides.length <= 10) {
      total.textContent = `0${slides.length}`;
   } else {
      total.textContent = slides.length;
   }

   slider.style.position = 'relative';

   const indicators = document.createElement('ol');
   indicators.style.cssText = `   
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 15;
      display: flex;
      justify-content: center;
      margin-right: 15%;
      margin-left: 15%;
      list-style: none;
      `;

   for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('li');
      dot.setAttribute('data-slide-to', i + 1);
      dot.style.cssText = `
         box-sizing: content-box;
         flex: 0 1 auto;
         width: 30px;
         height: 6px;
         margin-right: 3px;
         margin-left: 3px;
         cursor: pointer;
         background-color: #fff;
         background-clip: padding-box;
         border-top: 10px solid transparent;
         border-bottom: 10px solid transparent;
         opacity: .5;
         transition: opacity .6s ease;`;
      indicators.append(dot);
   }

   slider.append(indicators);

   const dots = document.querySelectorAll('[data-slide-to]');

   function showActiveNumberSlideAndDot(n) {
      if (n > slides.length) {
         currentSlide = 1;
      }
      if (n < 1) {
         currentSlide = slides.length;
      }

      if (slides.length < 10) {
         current.textContent = `0${currentSlide}`;
      } else {
         current.textContent = currentSlide;
      }

      dots.forEach(item => {
         item.style.opacity = 0.5;
      });
      dots[currentSlide - 1].style.opacity = 1;

   }
   showActiveNumberSlideAndDot(currentSlide);

   slides.forEach(slide => {
      slide.style.width = width;
   });

   slidesInner.style.width = +width.slice(0, width.length - 2) * 4 + 'px';
   slidesInner.style.display = 'flex';
   slidesInner.style.transition = '0.5s all';
   slidesWrapper.style.overflow = 'hidden';

   function deleteNotDigits(str) {
      return +str.replace(/\D/g, '');
   }

   btnNext.addEventListener('click', () => {
      if (offset === deleteNotDigits(width) * (slides.length - 1)) {
         offset = 0;
      } else {
         offset += deleteNotDigits(width);
      }
      slidesInner.style.transform = `translateX(-${offset}px)`;
      // console.log(offset);
      currentSlide += 1;
      showActiveNumberSlideAndDot(currentSlide);
   });

   btnPrev.addEventListener('click', () => {

      if (offset === 0) {
         offset = deleteNotDigits(width) * (slides.length - 1);
      } else {
         offset -= deleteNotDigits(width);
      }
      slidesInner.style.transform = `translateX(-${offset}px)`;
      // console.log(offset);
      currentSlide -= 1;
      showActiveNumberSlideAndDot(currentSlide);
   });

   dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
         const slideTo = e.target.getAttribute('data-slide-to');

         currentSlide = slideTo;
         offset = deleteNotDigits(width) * (slideTo - 1);
         slidesInner.style.transform = `translateX(-${offset}px)`;

         showActiveNumberSlideAndDot(slideTo);
      });
   });
}

export default slider;