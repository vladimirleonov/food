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

export default modal;
export {openModal};
export {closeModal};
