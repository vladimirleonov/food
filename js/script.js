import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/menuCard';
import calculating from './modules/calculator';
import forms from './modules/ajaxForms';
import slider from './modules/slider';
import openModal from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {

   const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

   tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
   modal('[data-modal]', '.modal', modalTimerId);
   timer('.timer', '2020-12-31');
   cards();
   calculating();
   forms('form', modalTimerId);
   slider({
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