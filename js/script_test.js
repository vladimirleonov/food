// context off this call

// function User(name, id) {
//    this.name = name;
//    this.id = id;
//    this.hello = function () {
//       console.log(`Привет ${this.name}!`);
//    };
//    this.showThis = function () {
//       console.log(this);
//    }
// }

// User.prototype.exit = function () {
//    console.log(`Пользователь ${this.name} ушел!`);
// };

// const ivan = new User('Ivan', 22);
// const petr = new User('Petr', 25);
// ivan.showThis();
// petr.showThis();


// console.log(ivan);
// console.log(petr);


// function sayName(surname) {
//    console.log(this);
//    console.log(this.name + surname);
// }

// const user = {
//    name: 'ily'
// };

// sayName.call(user, 'smith');
// sayName.apply(user, ['sss']);

// function showName(surname) {
//    console.log(this + ' ' + surname);
// }

// const double = showName.bind('ivan');
// double('petrov');
// double('ivanov');

// const obj = {
//    age: 32,
//    show: function () {
//       const say = () => {
//          console.log(this.age);
//       };
//       say();
//    }
// };
// obj.show();

// const double = a => a * 2;
// console.log(double(3));





//class

// class Rectangle {
//    constructor(width, height) {
//       this.height = height;
//       this.width = width;
//    }
//    showArea() {
//       return this.height * this.width;
//    }
// }

// const square = new Rectangle(10, 10);
// const long = new Rectangle(100, 20);

// console.log(square);
// console.log(square.showArea());
// console.log(long.showArea());

// class ColoredRectangleWithText extends Rectangle {
//    constructor(height, width, text, color) {
//       super(height, width);
//       this.text = text;
//       this.color = color;
//    }
//    showTextAndColor() {
//       console.log(`Текст: ${this.text}, цвет: ${this.color}`);
//    }
// }

// const div = new ColoredRectangleWithText(20, 33, 'hello world!', 'red.');
// div.showTextAndColor();
// console.log(div.showArea());

//promise


// console.log('запрос данных...');

// const p = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       console.log('подготовка данных...');

//       const product = {
//          name: 'TV',
//          id: 1234
//       };

//       resolve(product);

//    }, 2000);
// });

// p.then((data) => {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          data.model = 'adsad';
//          resolve(data);
//       }, 2000);
//    });
// }).then((dat) => {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          dat.color = 'red';
//          if (dat.model = 'adsad') {
//             reject();
//          }
//          resolve(dat);
//       }, 2000);
//    });
// }).then((da) => {
//    console.log(da);
// }).catch(() => {
//    console.log('что-то пошло не так');
// });

// const test = function (time) {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve(), time);
//    });
// };
// Promise.all([test(1000), test(2000)]).then(() => {
//    console.log('all');
// });
// Promise.race([test(1000), test(2000)]).then(() => {
//    console.log('first');
// });
// setTime(1000).then((clock) => {
//    console.log(`прошло ${clock} ms`);
// });
// setTime(2000).then((clock) => {
//    console.log(`прошло ${clock} ms`);
// });




//старый формат XMLHTTPRequest ctqxfc уже используется Fetch()

// forms.forEach(item => {
//    postData(item);
// });

// function postData(form) {
//    form.addEventListener('submit', (e) => {
//       e.preventDefault();

//       const messageStatus = document.createElement('img');
//       messageStatus.src = messages.loading;
//       messageStatus.style.cssText = `display: block; margin: 0 auto`;
//       form.append(messageStatus);
//       form.insertAdjacentElement('afterend', messageStatus);

//       const request = new XMLHttpRequest();
//       request.open('POST', 'server.php');

//       const formData = new FormData(form);

//       const object = {};
//       formData.forEach((item, key) => {
//          object[key] = item;
//       });
//       const json = JSON.stringify(object);

//       request.send(json);

//       request.addEventListener('load', () => {
//          if (request.status === 200) {
//             console.log(request.response);
//             showThanksForm(messages.success);
//             form.reset();
//             messageStatus.remove();
//          } else {
//             showThanksForm(messages.failure);
//          }
//       });
//    });

//    function showThanksForm(thanksMessage) {
//       const modalDialog = document.querySelector('.modal__dialog');

//       modalDialog.classList.add('hide');
//       openModal();

//       const modalThanks = document.createElement('div');
//       modalThanks.classList.add('modal__dialog');
//       modalThanks.innerHTML = `
//          <div class="modal__content">
//             <div class="modal__close" data-close>&times;</div>
//             <div class="modal__title">${thanksMessage}</div>
//          </div>
//       // `;
//       modal.append(modalThanks);

//       setTimeout(() => {
//          modalThanks.remove();
//          modalDialog.classList.add('show');
//          modalDialog.classList.remove('hide');
//          closeModal();
//       }, 3000);
//    }
// }




// examples get and post request

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//    .then(response => response.json())
//    .then(json => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST',
//       body: JSON.stringify({
//          name: 'ALEX'
//       }),
//       headers: {
//          'Content-type': 'application/json'
//       }
//    }).then(response => response.json())
//    .then(json => console.log(json));




// //sleder with show next slide without lesson

// const slider = document.querySelector('.offer__slider'),
//    content = slider.querySelectorAll('.offer__slide'),
//    current = slider.querySelector('#current'),
//    sliderContent = slider.querySelector('.offer__slider-counter'),
//    total = slider.querySelector('#total');

// let allSlide = content.length;

// showActiveTab();

// console.log(allSlide);

// function showActiveTab(i = 1) {
//    content.forEach(item => {
//       item.classList.add('hide');
//       item.classList.remove('show');
//    });
//    current.innerHTML = getNull(i);
//    console.log(content);
//    content[i - 1].classList.add('show');
//    content[i - 1].classList.remove('hide');
//    if (current.innerHTML === `0${allSlide}`) {
//       total.innerHTML = getNull(1);
//    } else {
//       total.innerHTML = getNull(i + 1);
//    }
// }
// let i = 1;

// sliderContent.addEventListener('click', (e) => {
//    const target = event.target;
//    if (target.classList.contains('offer__slider-prev')) {
//       console.log(target);
//       i = i - 1;
//       if (i <= 0) {
//          i = allSlide;
//       }
//       showActiveTab(i);
//    } else if (target.classList.contains('offer__slider-next')) {
//       console.log(target);
//       i = i + 1;
//       i = i % (allSlide + 1);
//       if (i === 0) {
//          i = 1;
//       }
//       showActiveTab(i);
//    }
// });

//getters and setters

// const persone = {
//    name: 'Alex',
//    age: 25,

//    get userAge() {
//       return this.age;
//    },

//    set userAge(num) {
//       this.age = num;
//    }
// };

// console.log(persone.userAge);
// console.log(persone.age);

// console.log(persone.userAge = 20);
// console.log(persone.age = 18);

// инкапсуляция через функцию-конструктор
// function User() {
//    this.name = name;
//    let userAge = age;

//    this.showData = function () {
//       console.log(`имя ${this.name}, возраст: ${userAge}`);
//    }

//    this.getAge = function () {
//       return userAge;
//    }
//    this.setAge = function (age) {
//       if (typeof age === 'number' && age > 10 && age < 110) {
//          userAge = age;
//       } else {
//          console.log('введите другое значение');
//       }
//    }
// }


// инкапсуляция через класс
// class User {
//    constructor(name, age) {
//       this.name = name;
//       this._age = age;
//    }

//    #surname = 'qwe';

//    get age() {
//       return this._age;
//    }
//    set age(age) {
//       if (typeof age === 'number' && age > 10 && age < 110) {
//          this._age = age;
//       } else {
//          console.log('введите другое число');
//       }
//    }
//    say() {
//       console.log(`имя: ${this.name}${this.#surname}, возраст: ${this._age}`);
//    }
// }

// const ivan = new User('ivan', 22);
// ivan.say();
// ivan.age = 33;
// ivan.say();
// console.log(ivan.age);

//ананимные самовызывающиеся функции
// const number = 1;

//    (function () {
//       const number = 2
//       console.log(number);
//       console.log(number + 5);
//    }());

//    console.log(number);

//    const user = (function () {
//       const private = function () {
//          console.log('I am private');
//       }

//       return {
//          say: private,
//          fun: function () {
//             console.log('sdfdsf');
//          }
//       }
//    }());

//    console.log(user);
//    user.say();
//    user.fun();