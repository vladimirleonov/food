// ajax forms

import {openModal, closeModal} from './modal';
import {postData} from '../services/services';

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

         postData('http://localhost:3000/requests', json)
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
         openModal('.modal', modalTimerId);

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
            closeModal('.modal');
         }, 3000);
      }
   }
}

export default forms;