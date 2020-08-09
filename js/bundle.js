/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/ajaxForms.js":
/*!*********************************!*\
  !*** ./js/modules/ajaxForms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");
// ajax forms




function forms(formSelector, modalTimerId) {
   const forms = document.querySelectorAll(formSelector);

   const messages = {
      loading: 'img/form/spinner.svg',
      success: 'Спасибо! Мы с вами скоро свяжемся',
      failure: 'Что-то пошло не так'
   };

   forms.forEach(item => {
      bindPostData(item);
   });

   function bindPostData(form) {
      form.addEventListener('submit', (e) => {
         e.preventDefault();

         const messageStatus = document.createElement('img');
         messageStatus.src = messages.loading;
         messageStatus.style.cssText = `display: block; margin: 0 auto`;
         form.append(messageStatus);
         form.insertAdjacentElement('afterend', messageStatus);

         const formData = new FormData(form);

         // console.log(formData);

         // const object = {};
         // formData.forEach((item, i) => {
         //    object[i] = item;
         // });

         const json = JSON.stringify(Object.fromEntries(formData.entries()));

         Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', json)
            .then(data => {
               // console.log(data);
               showThanksForm(messages.success);
            }).finally(() => {
               form.reset();
               messageStatus.remove();
            }).catch(() => {
               showThanksForm(messages.failure);
            });

      });

      function showThanksForm(thanksMessage) {
         const modalDialog = document.querySelector('.modal__dialog');

         modalDialog.classList.add('hide');
         Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])('.modal', modalTimerId);

         const modalThanks = document.createElement('div');
         modalThanks.classList.add('modal__dialog');
         modalThanks.innerHTML = `
         <div class="modal__content">
            <div class="modal__close" data-close>&times;</div>
            <div class="modal__title">${thanksMessage}</div>
         </div>
      // `;
         document.querySelector('.modal').append(modalThanks);

         setTimeout(() => {
            modalThanks.remove();
            modalDialog.classList.add('show');
            modalDialog.classList.remove('hide');
            Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])('.modal');
         }, 3000);
      }
   }
}

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//calculator

function calculating() {
   const calculating = document.querySelector('.calculating');
   const result = calculating.querySelector('.calculating__result span');

   let floor,
      height,
      weight,
      age,
      activity;

   if (localStorage.getItem('floor')) {
      floor = localStorage.getItem('floor');
      getInformationWithLocalStorage('#gender div', 'calculating__choose-item_active');
   } else {
      floor = 'woman';
      localStorage.setItem('floor', 'woman');
   }

   if (localStorage.getItem('activity')) {
      activity = localStorage.getItem('activity');
      getInformationWithLocalStorage('.calculating__choose_big div', 'calculating__choose-item_active');
   } else {
      activity = 1.375;
      localStorage.setItem('activity', 1.375);
   }

   function getInformationWithLocalStorage(selector, classActive) {
      const elements = document.querySelectorAll(selector);
      // console.log(elements);

      elements.forEach(item => {
         item.classList.remove(classActive);
         if (item.getAttribute('data-active') === localStorage.getItem('activity')) {
            item.classList.add(classActive);
         } else if (item.getAttribute('id') === localStorage.getItem('floor')) {
            item.classList.add(classActive);
         }
      });
   }


   function calcTotal() {
      if (!floor || !height || !weight || !age || !activity) {
         result.textContent = "_____";
         return;
      }
      if (floor === 'woman') {
         result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * activity);
      } else if (floor === 'man') {
         result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * activity);
      }
   }
   calcTotal();

   function getDinamicInformation(id) {
      const dinamicElem = document.querySelector(`#${id}`);
      switch (id) {
         case "height":
            height = +dinamicElem.value;
            break;
         case "weight":
            weight = +dinamicElem.value;
            break;
         case "age":
            age = +dinamicElem.value;
            break;
      }
      calcTotal();
   }


   calculating.querySelectorAll('input').forEach(item => {
      item.addEventListener('input', () => {
         if (item.value.match(/\D/g)) {
            item.style.border = '1px solid red';
         } else {
            item.style.border = 'none';
            getDinamicInformation(item.id);
         }
      });
   });


   function getStaticInformation(selector, activeClass) {
      const elements = document.querySelectorAll(selector);

      elements.forEach((item) => {
         item.addEventListener('click', () => {
            if (item.getAttribute('data-active')) {
               activity = +item.getAttribute('data-active');
               localStorage.setItem('activity', +item.getAttribute('data-active'));
            } else {
               floor = item.id;
               localStorage.setItem('floor', item.id);
            }

            elements.forEach((item) => {
               item.classList.remove(activeClass);
            });
            item.classList.add(activeClass);

            calcTotal();
         });
      });
   }

   getStaticInformation("#gender div", "calculating__choose-item_active");
   getStaticInformation(".calculating__choose_big div", "calculating__choose-item_active");
}

/* harmony default export */ __webpack_exports__["default"] = (calculating);

/***/ }),

/***/ "./js/modules/menuCard.js":
/*!********************************!*\
  !*** ./js/modules/menuCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");
//menuCard



function menuCard() {
   class MenuCard {
      constructor(src, alt, title, descr, price, parentSelector, ...classes) {
         this.src = src;
         this.alt = alt;
         this.title = title;
         this.descr = descr;
         this.price = +price;
         this.parent = document.querySelector(parentSelector);
         this.classes = classes;
         this.transfer = 26.93;
      }
      changeToUAH() {
         this.price = parseInt(this.price * this.transfer);
      }
      render() {
         this.changeToUAH();
         // console.log(this.classes);
         const element = document.createElement('div');
         if (this.classes.length === 0) {
            element.classList.add('menu__item');
         } else {
            this.classes.forEach(item => {
               element.classList.add(item);
            });
         }
         element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
               <div class="menu__item-cost">Цена:</div>
               <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
         `;
         this.parent.append(element);
      }
   }

   Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])('http://localhost:3000/menu')
      .then(data => {
         data.forEach(({
            img,
            altimg,
            title,
            descr,
            price
         }) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
         });
      });

   // вместо закаментированного кода выше запрос отправляется с использованием библиотеки axios
   // axios.get('http://localhost:3000/menu')
   //    .then(data => {
   //       const responce = data.data;
   //       responce.forEach(({
   //          img,
   //          altimg,
   //          title,
   //          descr,
   //          price
   //       }) => {
   //          new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
   //       });
   //    });


   // способ 2 для динамического создания карточек на основе данных с сервера (создает верстку на лету без классов)

   // getResource('http://localhost:3000/menu')
   //    .then(data => {
   //       createCard(data);
   //    });

   // const createCard = (data) => {
   //    data.forEach(({
   //       img,
   //       altimg,
   //       title,
   //       descr,
   //       price
   //    }) => {
   //       const element = document.createElement('div');
   //       element.classList.add('menu__item');

   //       element.innerHTML = `
   //          <img src=${img} alt=${altimg}>
   //          <h3 class="menu__item-subtitle">${title}</h3>
   //          <div class="menu__item-descr">${descr}</div>
   //          <div class="menu__item-divider"></div>
   //          <div class="menu__item-price">
   //             <div class="menu__item-cost">Цена:</div>
   //             <div class="menu__item-total"><span>${price}</span> грн/день</div>
   //          </div>
   //       `;
   //       document.querySelector('.menu .container').append(element);
   //    });
   // };
}

/* harmony default export */ __webpack_exports__["default"] = (menuCard);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: default, openModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
//modal 

function openModal(modalSelector, modalTimerId) {
   const modal = document.querySelector(modalSelector);
   modal.classList.add('show');
   modal.classList.remove('hide');
   // modal.classList.toggle('show');
   document.body.style.overflow = 'hidden';
   if(modalTimerId) {
      clearInterval(modalTimerId);
   }
}

function closeModal(modalSelector) {
   const modal = document.querySelector(modalSelector);
   modal.classList.add('hide');
   modal.classList.remove('show');
   // modal.classList.toggle('show');
   document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
   const btnsModal = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector);
   // modalCloseBtn = document.querySelector('[data-close]');

   btnsModal.forEach(item => {
      item.addEventListener('click', () => openModal(modalSelector, modalTimerId));
   });

   modal.addEventListener('click', (event) => {
      if (event.target === modal || event.target.getAttribute('data-close') == '') {
         closeModal(modalSelector);
      }
   });

   document.addEventListener('keydown', (event) => {
      if ((event.code == 'Escape') && modal.classList.contains('show')) {
         closeModal(modalSelector);
      }
      // if (event.which == 27) {
      //    closeModal();
      // }
   });

}

/* harmony default export */ __webpack_exports__["default"] = (modal);




/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//tabs

function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
   const tabsParent = document.querySelector(tabsParentSelector),
      tabs = document.querySelectorAll(tabsSelector),
      tabsContent = document.querySelectorAll(tabsContentSelector);

   function hideTabContent() {
      tabsContent.forEach(item => {
         item.classList.add('hide');
         item.classList.remove('show', 'fade');
      });

      tabs.forEach(item => {
         item.classList.remove(activeClass);
      });
   }

   function showTabContent(i = 0) {
      tabsContent[i].classList.remove('hide');
      tabsContent[i].classList.add('show', 'fade');
      tabs[i].classList.add(activeClass);
   }

   hideTabContent();
   showTabContent();

   tabsParent.addEventListener('click', (event) => {
      const target = event.target;
      if (target && target.classList.contains(tabsSelector.slice(1))) {
         tabs.forEach((item, i) => {
            if (target == item) {
               hideTabContent();
               showTabContent(i);
            }
         });
      }
   });
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//timer

function timer(id, dedline) {

   function getRemainingTime(endTime) {
      const t = Date.parse(endTime) - Date.parse(new Date()),
         days = Math.floor(t / (1000 * 60 * 60 * 24)),
         hours = Math.floor((t / (1000 * 60 * 60)) % 24),
         minutes = Math.floor((t / (1000 * 60)) % 60),
         seconds = Math.floor((t / 1000) % 60);
      // console.log(days);
      // console.log(hours);
      // console.log(minutes);
      // console.log(seconds);
      return {
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
      };
   }

   function getNull(num) {
      if (num >= 0 && num < 10) {
         return `0${num}`;
      } else {
         return num;
      }
   }

   function setClock(selector, endTime) {
      const timer = document.querySelector(selector),
         days = timer.querySelector('#days'),
         hours = timer.querySelector('#hours'),
         minutes = timer.querySelector('#minutes'),
         seconds = timer.querySelector('#seconds'),
         timeInterval = setInterval(updateClock, 1000);

      updateClock();

      function updateClock() {
         let t = getRemainingTime(endTime);

         days.innerHTML = getNull(t.days);
         hours.innerHTML = getNull(t.hours);
         minutes.innerHTML = getNull(t.minutes);
         seconds.innerHTML = getNull(t.seconds);

         if (t.total <= 0) {
            clearInterval(timeInterval);
         }
      }
   }

   setClock(id, dedline);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_menuCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menuCard */ "./js/modules/menuCard.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js");
/* harmony import */ var _modules_ajaxForms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ajaxForms */ "./js/modules/ajaxForms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");









document.addEventListener('DOMContentLoaded', () => {

   const modalTimerId = setTimeout(() => Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('.modal', modalTimerId), 50000);

   Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
   Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]', '.modal', modalTimerId);
   Object(_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])('.timer', '2020-08-11');
   Object(_modules_menuCard__WEBPACK_IMPORTED_MODULE_3__["default"])();
   Object(_modules_calculator__WEBPACK_IMPORTED_MODULE_4__["default"])();
   Object(_modules_ajaxForms__WEBPACK_IMPORTED_MODULE_5__["default"])('form', modalTimerId);
   Object(_modules_slider__WEBPACK_IMPORTED_MODULE_6__["default"])({
      container: '.offer__slider',
      prevArrow: '.offer__slider-prev', 
      slide: '.offer__slide', 
      nextArrow: '.offer__slider-next',  
      totalCounter: '#total', 
      currentCounter: '#current', 
      wrapper: '.offer__slider-wrapper', 
      field: '.offer__slider-inner'
   });
});

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
const postData = async (url, data) => {
   const res = await fetch(url, { //куда
      method: 'POST', //каким образом
      headers: {
         'Content-type': 'application/json'
      },
      body: data //что именно
   });

   return await res.json();
};

async function getResource(url) {
   let res = await fetch(url);

   if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
   }
   // console.log(res);
   return await res.json();
};




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map