//menuCard

import {getResource} from '../services/services';

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

   getResource('http://localhost:3000/menu')
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

export default menuCard;