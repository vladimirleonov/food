document.addEventListener('DOMContentLoaded', () => {
   const tabsContent = document.querySelectorAll('.tabcontent'),
      parentItem = document.querySelector('.tabheader__items'),
      tabs = document.querySelectorAll('.tabheader__item');
   //console.log(tabcontent);
   //console.log(tabs);
   // console.log(parent);

   function hideTabContent() {
      tabsContent.forEach(item => {
         //item.style.display = 'none';
         item.classList.add('hide');
         item.classList.remove('show', 'fade');
      });

      tabs.forEach(item => {
         item.classList.remove('tabheader__item_active');
      });
   }

   function showTabContent(i = 1) {
      //tabsContent[i].style.display = 'block';
      tabsContent[i].classList.add('show', 'fade');
      tabsContent[i].classList.remove('hide');
      tabs[i].classList.add('tabheader__item_active');
   }

   hideTabContent();
   showTabContent();

   parentItem.addEventListener('click', (event) => {
      const target = event.target;

      if (target && target.classList.contains('tabheader__item')) {
         tabs.forEach((item, i) => {
            if (target == item) {
               hideTabContent();
               showTabContent(i);
            }
         });

      }
   });
});