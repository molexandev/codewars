'use strict';

//! Завдання для підготовки до співбесіди

// TODO Напиши функцію getUserPosts(userId), яка: Приймає userId (число) як аргумент.Завантажує пости користувача з API: https://jsonplaceholder.typicode.com/posts?userId=USER_ID Виводить у консоль заголовки постів цього користувача (властивість title).
//
// const getUserPosts = async (userId) => {
//    try {
//       const response = await fetch(
//          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
//       );

//       if (!response.ok) {
//          throw new Error('Помилка при завантаженні даних');
//       }

//       const data = await response.json();
//       const userPosts = data.map((item) => item.title);
//       console.log(userPosts);
//    } catch (error) {
//       console.error('Сталася помилка:', error.message);
//    }
// };

// getUserPosts(1);

// TODO Напиши функцію, яка: Завантажує всіх користувачів. Завантажує всі пости. Для кожного користувача виводить в онсоль: 'Ім'я користувача: кількість постів'

// const getUserPosts = async () => {
//    const users = await fetch('https://jsonplaceholder.typicode.com/users');
//    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');

//    if (!users.ok || !posts.ok) {
//       throw new Error('Помилка при завантаженні даних');
//    }

//    const usersData = await users.json();
//    const postsData = await posts.json();

//    const userPostStats = usersData.map((user) => {
//       return {
//          name: user.name,
//          postsCount: postsData.filter((post) => post.userId === user.id).length,
//       };
//    });

//    userPostStats.forEach((user) => {
//       console.log(`${user.name}: ${user.postsCount}`);
//    });
// };

// getUserPosts();

// TODO Замикання (практика)

// function createUser(name) {
//    let loginCount = 0;

//    return {
//       getName() {
//          return name;
//       },
//       login() {
//          loginCount++;
//          console.log(`${name} has logged in ${loginCount} times.`);
//       },
//    };
// }

// const user1 = createUser('Sasha');

// user1.getName(); // "Sasha"
// user1.login(); // Sasha has logged in 1 times.
// user1.login();
// user1.login();
// user1.login();
// user1.login();
// user1.login();
// user1.login();

//

// function createCounter() {
//    let count = 0;
//    let obj = {
//       increment: function () {
//          return count++;
//       },
//       decrement: function () {
//          return count--;
//       },
//       getValue: function () {
//          return count;
//       },
//       reset: function () {
//          count = 0;
//          return count;
//       },
//    };
//    return obj;
//    // let count = 0;

//    // return function () {
//    //    console.log(count++);
//    //    return count;
//    // };
// }

// const counter = createCounter();

// // counter(); // 1
// // counter(); // 2
// // counter(); // 3

// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.increment()); // 3
// console.log(counter.decrement()); // 3
// console.log(counter.getValue()); // 2
// console.log(counter.reset()); // 0

//

// function createAccount() {
//    let balance = 0;

//    return {
//       getBalance() {
//          if (balance > 0) {
//             return balance;
//          } else if (balance < 0) {
//             return 'Сталася помилка!';
//          } else if (balance == 0) {
//             return 'На вашому рахунку 0';
//          }
//          return balance;
//       },
//       deposit(num) {
//          return (balance += num);
//       },
//       withdraw(num) {
//          if (balance - num < 0) {
//             return 'Недостатньо коштів!';
//          } else {
//             return (balance -= num);
//          }
//       },
//    };
// }

// const myAccount = createAccount();

// console.log(myAccount.getBalance()); // 0

// myAccount.deposit(100);
// console.log(myAccount.getBalance()); // 100

// myAccount.withdraw(30);
// console.log(myAccount.getBalance()); // 70

// myAccount.withdraw(70);
// console.log(myAccount.getBalance());
// myAccount.withdraw(100); // Повідомлення про помилку
// console.log(myAccount.getBalance()); // 70
// myAccount.withdraw(200);
// console.log(myAccount.getBalance()); // 70

// function createClickCounter(limit) {
//    let clickCounter = 0;

//    return function () {
//       clickCounter++;

//       if (clickCounter <= limit) {
//          return console.log(`Клік № ${clickCounter}`);
//       } else {
//          return console.log(`Ліміт вичерпано!`);
//       }
//    };
// }

// const click = createClickCounter(3);

// click(); // Клік №1
// click(); // Клік №2
// click(); // Клік №3
// click(); // Ліміт вичерпано!
// click(); // Ліміт вичерпано!

// TODO This (практика)

// const user = {
//    name: 'Саша',
//    sayHi() {
//       console.log(this.name);
//    },
// };

// const hi = user.sayHi.bind(user);
// hi();

// console.log(user);
// console.log(user.name);
// console.log(hi());

//

// function createUser() {
//    let name = '';

//    return {
//       setName(newName) {
//          return (name = newName);
//       },
//       getName() {
//          return name;
//       },
//       sayHello() {
//          return console.log(`Привіт, мене звати ${name}`);
//       },
//    };
// }

// const user = createUser();

// user.setName('Саша');
// // user.setName('Вася');
// // user.setName('Петя');
// user.sayHello(); // Привіт, мене звати Саша
// console.log(user.getName()); // Саша

// const user = {
//    name: 'Саша',
//    greet: () => {
//       console.log(`Привіт, я ${this.name}`);
//    },
// };

// user.greet(); // Що буде виведено? Чому?

//

// TODO 🧠 Задача: "Людина → Працівник → Розробник" У тебе є три рівні об'єктів:

// TODO  person — базовий об'єкт, у нього є метод sayHello(), який виводить:"Привіт, я людина!"

// TODO employee — об'єкт, який наслідує від person, і має метод work(), який виводить: "Я працюю!"

// TODO developer — об'єкт, який наслідує від employee, і має метод code(), який виводить:"Я пишу код!"

// TODO Створи ці об'єкти з правильним ланцюжком прототипів. Перевір, що developer може викликати: code() work() (успадковано від employee) sayHello() (успадковано від person)

// const person = {
//    sayHello() {
//       console.log('Привіт, я людина!');
//    },
// };

// const employee = {
//    work() {
//       console.log('Я працюю!');
//    },
//    __proto__: person,
// };

// const developer = {
//    code() {
//       console.log('Я пишу код!');
//    },
//    __proto__: employee,
// };

// developer.sayHello();
// developer.work();
// developer.code();

// const person = {
//    sayHello() {
//       console.log('Привіт, я людина!');
//    },
// };

// const employee = Object.create(person); // тепер employee має person як прототип
// employee.work = function () {
//    console.log('Я працюю!');
// };

// const developer = Object.create(employee); // developer наслідує від employee
// developer.code = function () {
//    console.log('Я пишу код!');
// };

// developer.code(); // Я пишу код!
// developer.work(); // Я працюю!
// developer.sayHello(); // Привіт, я людина!

//

// TODO Уяви, що ми маємо різні ролі в IT-команді. Твоя задача — створити об'єкти з ланцюжком прототипів так, щоб кожен наступний "наслідував" властивості попереднього.

// TODO Створи об’єкт teamMember, в якому є метод introduce(), що виводить: "Я частина команди!"

// TODO Створи об’єкт designer, який має метод design(), що виводить: "Я створюю дизайн!" і наслідує teamMember

// TODO Створи об’єкт frontendDev, який має метод code(), що виводить: "Я пишу фронтенд-код!" і наслідує designer

// const teamMember = {
//    introduce: function () {
//       console.log('Я частина команди!');
//    },
// };

// const designer = Object.create(teamMember);
// designer.design = function () {
//    console.log('Я створюю дизайн!');
// };

// const frontendDev = Object.create(designer);
// frontendDev.code = function () {
//    console.log('Я пишу фронтенд-код!');
// };

// frontendDev.code(); // "Я пишу фронтенд-код!"
// frontendDev.design(); // "Я створюю дизайн!"
// frontendDev.introduce();

// TODO Створити ланцюжок прототипів із методами та перевірками/

// TODO Створи об’єкт animal, який має метод eat(), що виводить "Я їм".
// TODO Створи об’єкт mammal, який наслідує від animal, і має метод walk(), що виводить "Я йду".
// TODO Створи об’єкт human, який наслідує від mammal, і має метод speak(), що виводить "Я розмовляю".

// const animal = {
//    eat() {
//       console.log('Я їм');
//    },
// };

// const mammal = Object.create(animal);
// mammal.walk = function () {
//    console.log('Я йду');
// };

// const human = Object.create(mammal);
// human.speak = function () {
//    console.log('Я розмовляю');
// };

// human.eat();
// human.walk();
// human.speak();

// const proto1 = Object.getPrototypeOf(animal);
// const proto2 = Object.getPrototypeOf(mammal);
// const proto3 = Object.getPrototypeOf(human);

// console.log(proto3 === mammal); // true
// console.log(proto2 === animal); // true
// console.log(proto1 === Object.prototype); // true

// console.log(human.hasOwnProperty('eat')); // false
// console.log('eat' in human); // true

// * Наслідування через prototype

// Крок 1. Створюємо конструктор Person
// function Person(name) {
//    this.name = name;
// }

// // Додаємо метод у прототип Person
// Person.prototype.sayHello = function () {
//    console.log(`Привіт, мене звати ${this.name}`);
// };

// // Крок 2. Створюємо конструктор Developer
// function Developer(name) {
//    // Наслідуємо властивість name від Person
//    Person.call(this, name);
// }

// // Крок 3. Наслідуємо методи Person
// Developer.prototype = Object.create(Person.prototype);

// // Крок 4. Повертаємо правильний конструктор
// Developer.prototype.constructor = Developer;

// // Додаємо метод у Developer
// Developer.prototype.code = function () {
//    console.log('Я пишу код');
// };

// // Перевірка:
// const dev = new Developer('Саша');

// dev.sayHello(); // Привіт, мене звати Саша
// dev.code(); // Я пишу код

// console.log(dev instanceof Developer); // true
// console.log(dev instanceof Person); // true

//

// function Person(name) {
//    this.name = name;
// }

// Person.prototype.sayHello = function () {
//    console.log(`Привіт, мене звати ${this.name}`);
// };

// function Developer(name) {
//    Person.call(this, name);
// }

// Developer.prototype = Object.create(Person.prototype);
// Developer.prototype.constructor = Developer;

// Developer.prototype.code = function () {
//    console.log('Я пишу код');
// };

// const dev = new Developer('Olexandr');
// const dev2 = new Developer('Shura');

// dev.sayHello();
// dev.code();
// dev2.sayHello();
// dev2.code();

// * Наслідування через class

// class Person {
//    constructor(name) {
//       this.name = name;
//    }

//    sayHello() {
//       console.log(`Привіт, мене звати ${this.name}`);
//    }
// }

// class Developer extends Person {
//    code() {
//       console.log('Я пишу код');
//    }
// }

// const dev = new Developer('Olexandr');
// const dev2 = new Developer('Shura');

// dev.sayHello(); // Привіт, мене звати Olexandr
// dev.code(); // Я пишу код

// dev2.sayHello(); // Привіт, мене звати Shura
// dev2.code(); // Я пишу код

//? class Person створює клас з конструктором і методом sayHello.

//? class Developer extends Person — це успадкування. Developer успадковує всі властивості й методи від Person.

//? Метод code() — власний метод Developer.

//? super(...) викликається всередині конструктора, якщо тобі потрібно виконати конструктор батьківського класу (тут — не обов’язково, бо ми не перевизначали constructor в Developer, але покажу приклад нижче).

// class Animal {
//    constructor(name) {
//       this.name = name;
//    }

//    speak() {
//       console.log(`Я тварина, мене звати ${this.name}`);
//    }
// }

// class Dog extends Animal {
//    constructor(name, breed) {
//       super(name);
//       this.breed = breed;
//    }
//    bark() {
//       console.log('Гав-гав!');
//    }

//    info() {
//       console.log(`Я породи ${this.breed} і мене звати ${this.name}`);
//    }
// }

// const cow = new Animal('Murka');
// const cow2 = new Animal('Lyska');
// const cow3 = new Animal('Kalynka');

// cow.speak();
// cow2.speak();
// cow3.speak();

// const dog = new Dog('Muchtar', 'Vivcharcka');

// dog.speak();
// dog.bark();
// dog.info();

//! Інкапсуляція

// class BankAccount {
//    #balance = 0;

//    constructor(owner) {
//       this.owner = owner;
//    }

//    deposit(amount) {
//       return (this.#balance += amount);
//    }

//    withdraw(amount) {
//       return (this.#balance -= amount);
//    }

//    getBalance() {
//       return console.log(this.#balance);
//    }
// }

// const acc = new BankAccount('Саша');

// acc.deposit(1000);
// acc.withdraw(300);
// acc.getBalance(); // 700
// // console.log(acc.#balance); // ❌ Помилка — не можна звертатись до пр

//

// class LimitedCounter {
//    #value = 0;
//    #min;
//    #max;

//    constructor(min, max) {
//       this.#min = min;
//       this.#max = max;
//       this.#value = min;
//    }

//    increment() {
//       if (this.#value < this.#max) {
//          this.#value++;
//       }
//    }

//    decrement() {
//       if (this.#value > this.#min) {
//          this.#value--;
//       }
//    }

//    getValue() {
//       console.log(this.#value);
//    }
// }

// const counter = new LimitedCounter(0, 3);

// counter.getValue(); // 0
// counter.increment();
// counter.increment();
// counter.getValue(); // 2
// counter.increment();
// counter.increment(); // до max
// counter.getValue(); // 3
// counter.increment(); // нічого не змінює

// counter.decrement();
// counter.decrement();
// counter.decrement();
// counter.decrement(); // нижче min не йде
// counter.getValue(); // 0

//

// class CountdownTimer {
//    #time = 0;
//    #intervalId = null;
//    #initialTime = 0;
//    #isPaused = false;

//    constructor(seconds, onUpdate) {
//       this.time = seconds;
//       this.#initialTime = seconds;
//       this.onUpdate = onUpdate;
//    }

//    get time() {
//       return this.#time;
//    }

//    set time(value) {
//       if (typeof value !== 'number' || value < 0) return;
//       this.#time = value;
//       this.onUpdate?.(this.#time);
//    }

//    tick() {
//       if (this.#time > 0) {
//          this.#time--;
//          this.onUpdate?.(this.#time);
//       } else {
//          this.stop();
//          alert('⏰ Час вийшов!');
//       }
//    }

//    start() {
//       if (this.#intervalId || this.#time <= 0) return;
//       this.#isPaused = false;
//       this.#intervalId = setInterval(() => this.tick(), 1000);
//    }

//    pause() {
//       if (this.#intervalId) {
//          clearInterval(this.#intervalId);
//          this.#intervalId = null;
//          this.#isPaused = true;
//       }
//    }

//    resume() {
//       if (!this.#intervalId && this.#isPaused) {
//          this.#intervalId = setInterval(() => this.tick(), 1000);
//          this.#isPaused = false;
//       }
//    }

//    togglePause() {
//       this.#isPaused ? this.resume() : this.pause();
//    }

//    stop() {
//       clearInterval(this.#intervalId);
//       this.#intervalId = null;
//       this.#isPaused = false;
//    }

//    reset() {
//       this.stop();
//       this.#time = this.#initialTime;
//       this.onUpdate?.(this.#time);
//    }
// }

// const display = document.getElementById('display');
// const startBtn = document.getElementById('start');
// const resetBtn = document.getElementById('reset');

// // Функція оновлення інтерфейсу
// function updateDisplay(time) {
//    display.textContent = time < 10 ? `0${time}` : time;
// }

// const timer = new CountdownTimer(10, updateDisplay);

// startBtn.addEventListener('click', () => timer.start());
// resetBtn.addEventListener('click', () => timer.reset());
// const pauseBtn = document.getElementById('pause');

// pauseBtn.addEventListener('click', () => {
//    timer.togglePause();
//    pauseBtn.textContent =
//       pauseBtn.textContent === 'Пауза' ? 'Продовжити' : 'Пауза';
// });

//! This
// function show() {
//    console.log(this);
// }

// show();

// const obj = {
//    name: 'JS',
//    show() {
//       console.log(this.name);
//    },
// };

// const fn = obj.show;
// fn();

// const obj = {
//    name: 'JS',
//    show: function () {
//       const inner = () => {
//          console.log(this.name);
//       };
//       inner();
//    },
// };

// obj.show();

//! call, apply, bind

// const person = {
//    name: 'Олекса',
// };

// function sayHi(city, age) {
//    console.log(`Мене звати ${this.name}, я з ${city}, мені ${age}`);
// }

// sayHi.call(person, 'Львів', 30);
// sayHi.apply(person, ['Львів', 30]);
// const newFunc = sayHi.bind(person, 'Львів', 30);
// newFunc();

//

// const user1 = { name: 'Саша' };
// const user2 = { name: 'Наталя' };

// function introduce(job, company) {
//    console.log(
//       `Мене звати ${this.name}, я працюю ${job} у компанії ${company}`
//    );
// }

// introduce.call(user1, 'Front-end developer', 'Global Logic');
// introduce.apply(user2, ['Маркетолог', 'АТБ']);
// const foo = introduce.bind(user1, 'Front-end developer', 'Global Logic');
// foo();

//! Використання call, apply, bind у контексті об'єктно-орієнтованого програмування (OOP)

// function Person(name, age) {
//    this.name = name;
//    this.age = age;
// }

// Person.prototype.introduce = function () {
//    console.log(`Мене звати ${this.name}, мені ${this.age} років`);
// };

// function Developer(name, age, skill) {
//    Person.call(this, name, age); // Викликаємо Person з контекстом this
//    this.skill = skill;
// }

// Developer.prototype = Object.create(Person.prototype);
// Developer.prototype.constructor = Developer;

// Developer.prototype.code = function () {
//    console.log(`Я програмую на ${this.skill}`);
// };

// const dev = new Developer('Саша', 30, 'JavaScript');
// dev.introduce(); // Мене звати Саша, мені 30 років
// dev.code(); // Я програмую на JavaScript

//

// class Person {
//    constructor(name, age) {
//       this.name = name;
//       this.age = age;
//    }

//    introduce() {
//       console.log(`Мене звати ${this.name}, мені ${this.age} років`);
//    }
// }

// class Developer extends Person {
//    constructor(name, age, skill) {
//       super(name, age); // Викликає constructor з Person
//       this.skill = skill;
//    }

//    code() {
//       console.log(`Я пишу код на ${this.skill}`);
//    }
// }

// const dev = new Developer('Наталя', 28, 'React');

// dev.introduce(); // Мене звати Наталя, мені 28 років
// dev.code(); // Я пишу код на React

//

// З помилкою:
// class Timer {
//    constructor(time) {
//       this.time = time;
//    }

//    start() {
//       this.time++;
//       console.log(`Час йде ${this.time} сек.`);
//    }
// }

// const timer = new Timer(0);
// setInterval(timer.start(), 1000);

// Виправлено:
// class Timer {
//    constructor(time) {
//       this.time = time;
//    }

//    start() {
//       this.time++;
//       console.log(`Час йде ${this.time} сек.`);
//    }
// }

// const timer = new Timer(0);
// // setInterval(timer.start.bind(timer), 1000);
// setInterval(() => {
//    timer.start(0);
// }, 1000);

//

// const intervalId = setInterval(() => {
//    console.log('Hello');
// }, 1000);

// setInterval(() => {
//    clearInterval(intervalId);
// }, 3000);

//

// class Counter {
//    constructor(startValue) {
//       this.startValue = startValue;
//       this.timerId = null;
//    }

//    start = () => {
//       this.timerId = setInterval(() => {
//          console.log(this.startValue++);
//       }, 1000);
//    };

//    stop() {
//       clearInterval(this.timerId);
//    }
// }

// const counter = new Counter(10);
// counter.start();

// setTimeout(() => {
//    counter.stop();
// }, 5000);

// class PauseableTimer {
//    constructor(startValue) {
//       this.startValue = startValue;
//       this.timerId = null;
//    }

//    start() {
//       this.timerId = setInterval(() => {
//          console.log(++this.startValue);
//       }, 1000);
//    }

//    pause() {
//       clearInterval(this.timerId);
//       this.timerId = null;
//    }

//    resume() {
//       if (this.timerId === null) {
//          this.timerId = setInterval(() => {
//             console.log(++this.startValue);
//          }, 1000);
//       }
//    }
// }

// const t = new PauseableTimer(0);

// t.start();

// setTimeout(() => t.pause(), 3000); // зупинка після 3 сек
// setTimeout(() => t.resume(), 5000); // відновлення через 2 сек паузи

// const animal = {
//    eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// console.log(dog.eats); // true
// console.log(dog.barks); // true
// console.log(Object.getPrototypeOf(dog) === animal); // true

const person = {
   name: 'Наталя',
   sayHi() {
      console.log(`Привіт, я ${this.name}`);
   },
};

const say = person.sayHi;
say(); // Що виведе?
