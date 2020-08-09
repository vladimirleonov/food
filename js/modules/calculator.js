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

export default calculating;