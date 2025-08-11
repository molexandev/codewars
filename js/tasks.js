'use strict';

// const { createElement } = require('react');

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

//

// class Animal {
//    speak() {
//       console.log('Тварина видає звук');
//    }
// }

// class Dog extends Animal {
//    speak() {
//       console.log('Собака гавкає');
//       super.speak();
//    }
// }

// const rex = new Dog();
// const sharik = new Dog();

// rex.speak();
// sharik.speak();

//

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

//

// class Animal {
//    constructor(name) {
//       this.name = name;
//    }

//    speak() {
//       console.log(`${this.name} видає звук`);
//    }
// }

// class Cat extends Animal {
//    constructor(name, color) {
//       super(name);
//       this.color = color;
//    }

//    speak() {
//       console.log(`${this.name} ${this.color} нявкає`);
//    }
// }

// class Dog extends Animal {
//    constructor(name, breed) {
//       super(name); // викликає constructor батьківського класу
//       this.breed = breed;
//    }

//    speak() {
//       console.log(`${this.name} гавкає`);
//    }
// }

// const murchyk = new Cat('Murchyk', `(білий)`, 'нявкає');
// murchyk.speak();

// const rex = new Dog('Рекс', 'Вівчарка');
// rex.speak(); // Рекс гавкає
// console.log(rex.breed); // Вівчарка

//

// class User {
//    constructor(name) {
//       this._name = name; // приватна умова – нижнє підкреслення
//    }

//    get name() {
//       console.log('Зчитуємо ім’я');
//       return this._name;
//    }

//    set name(value) {
//       console.log('Змінюємо ім’я');
//       if (value.length < 2) {
//          console.log('Ім’я занадто коротке');
//          return;
//       }
//       this._name = value;
//    }
// }

// const user = new User('Саша');

// console.log(user.name); // Зчитуємо ім’я → Саша

// user.name = 'О'; // Змінюємо ім’я → Ім’я занадто коротке
// user.name = 'Олекса'; // Змінюємо ім’я

// console.log(user.name); // Зчитуємо ім’я → Олекса

//

// class User {
//    constructor(name, birthYear) {
//       this.name = name;
//       this.birthYear = birthYear;
//    }

//    get age() {
//       return 2025 - this.birthYear;
//    }

//    set age(value) {
//       console.log(
//          'Вік не можна встановити напряму. Це розраховується з birthYear.'
//       );
//    }
// }

// const user = new User('Саша', 2000);

// console.log(user.age); // 25 (якщо 2025 рік)

// user.age = 30; // В консоль: Вік не можна встановити напряму...

//

// class Person {
//    constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//    }

//    get fullName() {
//       return `${this.firstName} ${this.lastName}`;
//    }

//    set fullName(value) {
//       let newName = value.split(' ');
//       this.firstName = newName[0];
//       this.lastName = newName[1];
//    }
// }

// const person = new Person('Олекса', 'Петренко');

// console.log(person.fullName); // "Олекса Петренко"

// person.fullName = 'Саша Іваненко';

// console.log(person.firstName); // "Саша"
// console.log(person.lastName); // "Іваненко"

//! Статичні методи

// class User {
//    constructor(name, age) {
//       this.name = name;
//       this.age = age;
//    }

//    static compareByAge(user1, user2) {
//       if (user1.age < user2.age) {
//          return `${user1.name} молодший за ${user2.name}`;
//       } else if (user1.age > user2.age) {
//          return `${user1.name} старший за ${user2.name}`;
//       } else {
//          return `${user1.name} і ${user2.name} одного віку`;
//       }
//    }
// }

// const user1 = new User('Sasha', 36);
// const user2 = new User('Mark', 96);

// console.log(User.compareByAge(user1, user2));

// class User {
//    constructor(name, age) {
//       this.name = name;
//       this.age = age;
//    }

//    static oldest(value) {
//       let oldest = value[0];

//       for (let user of value) {
//          if (user.age > oldest.age) {
//             oldest = user;
//          }
//       }
//       return oldest;
//    }
// }

// const users = [
//    new User('Anna', 24),
//    new User('Bohdan', 41),
//    new User('Ira', 33),
// ];

// console.log(User.oldest(users));

// class Counter {
//    static totalIncrements = 0;

//    constructor() {
//       this.value = 0;
//    }

//    increment() {
//       this.value += 1;
//       Counter.totalIncrements += 1; // 🔑 ОНОВЛЮЄМО СТАТИЧНУ ВЛАСТИВІСТЬ
//    }

//    static getTotalIncrements() {
//       return Counter.totalIncrements;
//    }
// }

// const c1 = new Counter();
// const c2 = new Counter();

// c1.increment(); // +1
// c1.increment(); // +1
// c2.increment(); // +1

// console.log(Counter.getTotalIncrements()); // ✅ 3

// class Counter {
//    static totalIncrements = 0;

//    constructor() {
//       this.value = 0;
//    }

//    increment() {
//       this.value += 1;
//       Counter.totalIncrements += 1;
//    }

//    static getTotalIncrements() {
//       return Counter.totalIncrements;
//    }
// }

// const c1 = new Counter();
// const c2 = new Counter();

// c1.increment(); // +1
// c1.increment(); // +1
// c2.increment(); // +1

// console.log(Counter.getTotalIncrements()); // має бути 3

// class SecretBox {
//    #secret;

//    constructor(secret) {
//       this.#secret = secret;
//    }

//    revealSecret() {
//       console.log(this.#secret);
//    }
// }

// const box = new SecretBox('🥷 Це секрет!');
// box.revealSecret(); // 🥷 Це секрет!

// console.log(box.#secret); // ❌ Помилка: приватне поле недоступне ззовні

// class Safe {
//    #password;
//    #content;

//    constructor(password) {
//       this.#password = password;
//       this.#content = null;
//    }

//    store(value, password) {
//       if (password === this.#password) {
//          this.#content = value;
//       }
//    }

//    retrieve(password) {
//       if (password === this.#password) {
//          return this.#content;
//       }
//       return null;
//    }
// }

// const mySafe = new Safe('1234');

// mySafe.store('Золото', '1234');
// console.log(mySafe.retrieve('1234')); // Золото

// mySafe.store('Діаманти', '0000'); // неправильний пароль
// console.log(mySafe.retrieve('0000')); // null

// class LoginTracker {
//    #loginCount;
//    #password;

//    constructor(password) {
//       this.#loginCount = 0;
//       this.#password = password;
//    }

//    login(password) {
//       if (password === this.#password) {
//          this.#loginCount += 1;
//          return 'Успішний вхід';
//       } else {
//          return 'Доступ заборонено';
//       }
//    }

//    getLoginCount() {
//       return this.#loginCount;
//    }
// }

// const tracker = new LoginTracker('pass123');

// console.log(tracker.login('wrong')); // Доступ заборонено
// console.log(tracker.login('pass123')); // Успішний вхід
// console.log(tracker.login('pass123')); // Успішний вхід

// console.log(tracker.getLoginCount()); // 2

//! Функції-генератори

//

// function* getSquare() {
//    for (let i = 1; i < 6; i++) {
//       yield i * i;
//    }
// }

// let result = getSquare();
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);

//

// function* idGenerator() {
//    let id = 1;
//    while (true) {
//       yield id;
//       id++;
//    }
// }

// const gen = idGenerator();

// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3
// // і так далі...

// function* passwordGenerator() {
//    let pass = 'pass',
//       num = 1;

//    while (true) {
//       yield pass + num;
//       num++;
//    }
// }

// const gen = passwordGenerator();
// console.log(gen.next().value); // 'pass1'
// console.log(gen.next().value); // 'pass2'
// console.log(gen.next().value); // 'pass3'
// console.log(gen.next().value); // 4
// console.log(gen.next().value); // 5
// console.log(gen.next().value); // 6

// function* createUserId(prefix) {
//    let res = prefix + '-',
//       num = 1;

//    while (true) {
//       yield res + num;
//       num++;
//    }
// }

// const gen = createUserId('user');

// console.log(gen.next().value); // 'user-1'
// console.log(gen.next().value); // 'user-2'
// console.log(gen.next().value); // 'user-3'

// function* letters() {
//    yield 'A';
//    yield 'B';
//    yield 'C';
// }

// function* numbers() {
//    yield 1;
//    yield 2;
//    yield 3;
// }

// function* fullGenerator() {
//    yield* letters();
//    yield* numbers();
// }

// for (let n of fullGenerator()) {
//    console.log(n);
// }

//!

// async function* delayedMessages() {}
// async function* delayedMessages() {
//    for (let i = 1; i <= 3; i++) {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       yield `Повідомлення ${i}`;
//    }
// }

// (async () => {
//    for await (let mess of delayedMessages()) {
//       console.log(mess);
//    }
// })();

// function simulateDelivery() {
//    return new Promise((resolve, reject) => {
//       if (Math.random() > 0.5) {
//          setTimeout(() => resolve('Замовлення доставлено!'), 2000);
//       } else {
//          setTimeout(() => reject('Сталася помилка доставки.'), 2000);
//       }
//    });
// }

// simulateDelivery()
//    .then((message) => {
//       console.log(message);
//    })
//    .catch((err) => {
//       console.log(err);
//    });

//

// function makeDough() {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve('Тісто готове'), 1000);
//    });
// }

// function addToppings(dough) {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve(`${dough} + начинка додана`), 1000);
//    });
// }

// function bakePizza(preparedPizza) {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve(`${preparedPizza} => піца спечена!`), 1000);
//    });
// }

// makeDough()
//    .then((res1) => {
//       console.log(res1);
//       return addToppings(res1);
//    })
//    .then((res2) => {
//       console.log(res2);
//       return bakePizza(res2);
//    })
//    .then((res3) => {
//       console.log(res3); // фінальний результат
//    })
//    .catch((err) => {
//       console.log('Помилка:', err);
//    });

//

// function getUser() {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve('Користувач отриманий'), 1000);
//    });
// }

// function getOrders() {
//    return new Promise((_, reject) => {
//       setTimeout(() => reject('Не вдалося отримати замовлення'), 1000);
//    });
// }

// function showDashboard() {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve('Панель показано'), 1000);
//    });
// }

// getUser()
//    .then((res1) => {
//       console.log(res1);
//       return getOrders(); // Тут має бути getOrders
//    })
//    .then((res2) => {
//       console.log(res2);
//       return showDashboard(); // Виконується тільки якщо не було помилки в getOrders
//    })
//    .then((res3) => {
//       console.log(res3);
//    })
//    .catch((err) => {
//       console.log('Сталася помилка:', err);
//    });

// function wash() {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve('Машину помито'), 1000);
//    });
// }

// function polish(prev) {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve(prev + ' ➡ Поліровано'), 1000);
//    });
// }

// function wax(prev) {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve(prev + ' ➡ Навощено'), 1000);
//    });
// }

// wash()
//    .then((res1) => {
//       return polish(res1);
//    })
//    .then((res2) => {
//       return wax(res2);
//    })
//    .then((res3) => {
//       console.log(res3);
//    })
//    .catch((err) => {
//       console.log(`Помилка ${err}`);
//    })
//    .finally(() => {
//       console.log('Кінець!');
//    });

// variant 2

// async function carService() {
//    try {
//       const res1 = await wash();
//       const res2 = await polish(res1);
//       const res3 = await wax(res2);
//       console.log(res3);
//    } catch (err) {
//       console.log(`Помилка ${err}`);
//    } finally {
//       console.log('Кінець!');
//    }
// }

// carService();

//

// function placeOrder() {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve('Нове замовлення'), 1000);
//    });
// }

// function prepareFood(order) {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve(`${order} → їжа готова`), 1000);
//    });
// }

// function deliverFood(food) {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve(`${food} → доставлено`), 1000);
//    });
// }

// async function processOrder() {
//    try {
//       const order = await placeOrder();
//       console.log(order);

//       const food = await prepareFood(order);
//       console.log(food);

//       const confirmation = await deliverFood(food);
//       console.log(confirmation);
//    } catch (err) {
//       console.log(`Сталася помилка: ${err}`);
//    } finally {
//       console.log('Процес завершено.');
//    }
// }

// processOrder();

// // placeOrder()
// //    .then((order) => {
// //       console.log(order);
// //       return prepareFood(order);
// //    })
// //    .then((food) => {
// //       console.log(food);
// //       return prepareFood(food);
// //    })
// //    .then((confirmation) => {
// //       console.log(confirmation);
// //    })
// //    .catch((err) => {
// //       console.log(`Сталася помилка: ${err}`);
// //    })
// //    .finally(() => {
// //       console.log('Процес завершено.');
// //    });

//

// function placeBookOrder() {
//    return new Promise((resolve) => {
//       setTimeout(() => {
//          const msg = 'Книга замовлена';
//          console.log(msg);
//          resolve(msg);
//       }, 1000);
//    });
// }

// function checkStock(order) {
//    return new Promise((resolve) => {
//       setTimeout(() => {
//          const inStock = Math.random() > 0.5;
//          const msg = inStock ? 'Книга в наявності' : 'Книги немає';
//          console.log(msg);
//          resolve(msg);
//       }, 1000);
//    });
// }

// function shipOrder(status) {
//    return new Promise((resolve) => {
//       setTimeout(() => {
//          const msg = 'Замовлення відправлено';
//          console.log(msg);
//          resolve(msg);
//       }, 1000);
//    });
// }

// async function processBookOrder() {
//    try {
//       const order = await placeBookOrder();
//       const check = await checkStock(order);
//       if (check === 'Книги немає') throw 'Немає книги';
//       const ship = await shipOrder(check);
//    } catch (err) {
//       console.log(`Сталася помилка: ${err}`);
//    } finally {
//       console.log('Процес завершено.');
//    }
// }

// processBookOrder();

//

// function getDrink() {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve('Напій'), 1000);
//    });
// }

// function getBurger() {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve('Бургер'), 1500);
//    });
// }

// function getFries() {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve('Картопля'), 2000);
//    });
// }

// Promise.all([getDrink(), getBurger(), getFries()]).then((results) =>
//    console.log(`Ваше замовлення: ${results.join(', ')}`)
// );

//

// function getTea() {
//    return new Promise((resolve) => {
//       setTimeout(
//          () => resolve('Першим приготували: чай'),
//          Math.floor(Math.random() * 3000)
//       );
//    });
// }

// function getCoffee() {
//    return new Promise((resolve) => {
//       setTimeout(
//          () => resolve('Першою приготували: каву'),
//          Math.floor(Math.random() * 3000)
//       );
//    });
// }

// function getJuice() {
//    return new Promise((resolve) => {
//       setTimeout(
//          () => resolve('Першим приготували: сік'),
//          Math.floor(Math.random() * 3000)
//       );
//    });
// }

// function getMilkshake() {
//    return new Promise((_, reject) => {
//       setTimeout(
//          () => reject('Молочний коктейль закінчився 😢'),
//          Math.floor(Math.random() * 3000)
//       );
//    });
// }

// Promise.race([getTea(), getCoffee(), getJuice(), getMilkshake()])
//    .then((res) => {
//       console.log(res);
//    })
//    .catch((err) => console.log('Помилка:', err));

//

// function loadProfile() {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve('Профіль завантажено'), 1000);
//    });
// }

// function loadPosts() {
//    return new Promise((_, reject) => {
//       setTimeout(() => reject('Помилка при завантаженні постів'), 1500);
//    });
// }

// function loadFriends() {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve('Список друзів завантажено'), 2000);
//    });
// }

// Promise.allSettled([loadProfile(), loadPosts(), loadFriends()]).then(
//    (results) => {
//       results.forEach((result) => {
//          if (result.status === 'fulfilled') {
//             console.log(`✅ Успішно: ${result.value}`);
//          } else {
//             console.log(`❌ Відхилено: ${result.reason}`);
//          }
//       });
//    }
// );

//

// const server1 = new Promise((_, reject) =>
//    setTimeout(() => reject('Сервер 1 недоступний'), 1000)
// );

// const server2 = new Promise((resolve) =>
//    setTimeout(() => resolve('Дані з сервера 2'), 1500)
// );

// const server3 = new Promise((resolve) =>
//    setTimeout(() => resolve('Дані з сервера 3'), 2000)
// );

// Promise.any([server1, server2, server3])
//    .then((res) => {
//       console.log(`✅ Отримано: ${res}`);
//    })
//    .catch((err) => {
//       console.log(`❌ Усі сервери дали помилку: ${err}`);
//    });

//

// const getCake = new Promise((_, reject) => {
//    setTimeout(() => {
//       // resolve('Печиво отримано!');
//       reject('Помилка! Щось пішло не так!');
//    }, 1000);
// });

// const getPie = new Promise((_, reject) => {
//    setTimeout(() => {
//       reject('Помилка! Щось пішло не так!');
//    }, 2000);
// });

// const getDonut = new Promise((_, reject) => {
//    setTimeout(() => {
//       // resolve('Пончик отримано!');
//       reject('Помилка! Щось пішло не так!');
//    }, 3000);
// });

// Promise.any([getCake, getPie, getDonut])
//    .then((res) => {
//       console.log(res);
//    })
//    .catch((err) => {
//       if (err instanceof AggregateError) {
//          err.errors.forEach((e) => console.log(`❌ ${e}`));
//       }
//    });

//

// async function* getMessages() {
//    yield 'Повідомлення 1';
//    await new Promise((res) => setTimeout(res, 1000));
//    yield 'Повідомлення 2';
//    await new Promise((res) => setTimeout(res, 1000));
//    yield 'Повідомлення 3';
// }

// (async () => {
//    for await (const msg of getMessages()) {
//       console.log(msg);
//    }
// })();

//

// const promises = [
//    Promise.resolve('🍎 Яблуко'),
//    new Promise((resolve) => setTimeout(() => resolve('🍌 Банан'), 1000)),
//    Promise.resolve('🍒 Вишня'),
// ];

// async function getFruits() {
//    for await (const fruit of promises) {
//       console.log(fruit);
//    }
//    console.log('✅ Усі фрукти оброблено!');
// }

// getFruits();

//

// const userRequests = [
//    new Promise((res) => setTimeout(() => res('👤 Користувач 1'), 1500)),
//    new Promise((res) => setTimeout(() => res('👤 Користувач 2'), 500)),
//    new Promise((res) => setTimeout(() => res('👤 Користувач 3'), 1000)),
// ];

// async function fetchUsers() {
//    for await (const user of userRequests) {
//       console.log(user);
//    }
//    console.log('✅ Усі користувачі отримані!');
// }

// fetchUsers();

//

// for (let i = 0; i < 10; i++) {
//    setTimeout(() => {
//       console.log(i);
//    }, 1000);
// }

//! Event loop

// console.log('A');

// setTimeout(() => {
//    console.log('B');
// }, 0);

// Promise.resolve().then(() => {
//    console.log('C');
//    queueMicrotask(() => console.log('D'));
// });

// queueMicrotask(() => {
//    console.log('E');
// });

// console.log('F');

//

// console.log('1');

// queueMicrotask(() => {
//    console.log('2');
// });

// setTimeout(() => {
//    console.log('3');
//    Promise.resolve().then(() => console.log('4'));
// }, 0);

// Promise.resolve().then(() => {
//    console.log('5');
//    setTimeout(() => console.log('6'), 0);
// });

// console.log('7');

//
// async function test() {
//    console.log('1');

//    await Promise.resolve();

//    console.log('2');
// }

// test();

// console.log('3');

//

// console.log('1');

// setTimeout(() => {
//    console.log('2');
// }, 0);

// Promise.resolve().then(() => {
//    console.log('3');
// });

// queueMicrotask(() => {
//    console.log('4');
// });

// console.log('5');

//

// console.log('Start');

// setTimeout(() => {
//    console.log('Timeout');
// }, 0);

// Promise.resolve()
//    .then(() => {
//       console.log('Promise 1');
//    })
//    .then(() => {
//       console.log('Promise 2');
//    });

// queueMicrotask(() => {
//    console.log('Microtask');
// });

// console.log('End');

//

// console.log('1');

// setTimeout(() => {
//    console.log('2');
// }, 0);

// Promise.resolve()
//    .then(() => {
//       console.log('3');
//       queueMicrotask(() => {
//          console.log('4');
//       });
//    })
//    .then(() => {
//       console.log('5');
//    });

// queueMicrotask(() => {
//    console.log('6');
// });

// console.log('7');

//

// let a = prompt();

// switch (a) {
//    case '1':
//       alert('Січень');
//       break;
//    case '2':
//       alert('Лютий');
//       break;
//    case '3':
//       alert('Березень');
//       break;
//    case '4':
//       alert('Квітень');
//       break;
//    case '5':
//       alert('Травень');
//       break;
//    case '6':
//       alert('Червень');
//       break;
//    case '7':
//       alert('Липень');
//       break;
//    case '8':
//       alert('Серпень');
//       break;
//    case '9':
//       alert('Вересень');
//       break;
//    case '10':
//       alert('Жовтеь');
//       break;
//    case '11':
//       alert('Листопад');
//       break;
//    case '12':
//       alert('Грудень');
//       break;
//    default:
//       alert('Місяць введено не вірно!');
//       break;
// }

//

// let a = prompt();

// // console.log(a);
// // console.log(typeof a);
// // console.log(a.length);

// if (a.length < 3) {
//    alert('Ви ввели занадто коротке число! Має бути 3-значне!');
// } else if (a.length > 3) {
//    alert('Ви ввели занадто довге число! Має бути 3-значне!');
// } else if (!isNaN(a) && a.length == 3) {
//    let digits = a.split(''),
//       b = 0;
//    console.log(digits);
//    digits.map((item) => {
//       b += Number(item);
//    });
//    alert(b);
// }

// console.log('1');

// setTimeout(() => {
//    console.log('2');
// }, 0);

// Promise.resolve().then(() => {
//    console.log('3');
// });

// queueMicrotask(() => {
//    console.log('4');
// });

// console.log('5');

//

// document.getElementById('menu').addEventListener('click', function (event) {
//    if (event.target.tagName === 'LI') {
//       console.log(`Ви клікнули на: ${event.target.textContent}`);
//    }
// });

// const buttons = document.getElementById('buttons');
// const box = document.getElementById('box');

// buttons.addEventListener('click', function (event) {
//    const color = event.target.dataset.color;

//    if (color) {
//       console.log(`Ви клікнули на: ${event.target.textContent}`);
//       box.style.background = color;
//    }
// });

//

// const taskInput = document.getElementById('taskInput');
// const addBtn = document.getElementById('addBtn');
// const taskList = document.getElementById('taskList');

// addBtn.addEventListener('click', () => {
//    const li = document.createElement('li');
//    li.innerHTML = `
//       ${taskInput.value}
//       <button class="remove-btn">Видалити</button>
//    `;
//    taskList.appendChild(li);
//    taskInput.value = '';
// });

// // Делегування!
// taskList.addEventListener('click', (event) => {
//    if (event.target.classList.contains('remove-btn')) {
//       event.target.closest('li').remove();
//    }
// });

// document.getElementById('outer').addEventListener('click', () => {
//    console.log('🔵 OUTER bubbling');
// });

// document.getElementById('outer').addEventListener(
//    'click',
//    () => {
//       console.log('🟣 OUTER capturing (once)');
//    },
//    { capture: true, once: true }
// );

// document.getElementById('middle').addEventListener('click', () => {
//    console.log('🟢 MIDDLE bubbling');
// });

// document.getElementById('inner').addEventListener('click', (event) => {
//    console.log('🟠 INNER');
//    event.stopPropagation();
// });

//! Спливання подій

// document.getElementById('outer').addEventListener('click', () => {
//    console.log('🟡 OUTER bubbling');
// });

// document.getElementById('middle').addEventListener(
//    'click',
//    () => {
//       console.log('🔵 MIDDLE capturing');
//    },
//    { capture: true }
// );

// document.getElementById('inner').addEventListener('click', () => {
//    console.log('🔴 INNER clicked');
// });

//

// function test() {
//    console.log(x); // ?
//    if (true) {
//       var x = 10;
//    }
//    console.log(x); // ?
// }

// test();

//! Замикання (ще раз)

// function createSecretHolder(secret) {
//    return {
//       getSecret() {
//          return secret;
//       },
//       setSecret(value) {
//          secret = value;
//       },
//    };
// }
// const holder = createSecretHolder('🔐 Початковий секрет');

// console.log(holder.getSecret()); // '🔐 Початковий секрет'

// holder.setSecret('🧪 Новий секрет');
// console.log(holder.getSecret()); // '🧪 Новий секрет'
// holder.setSecret('🧪 Ще один секрет');
// console.log(holder.getSecret()); // '🧪 Новий секрет'

//! Робота з DOM?

// const title = document.getElementById('title');
// const btn = document.querySelector('button');

// btn.textContent = 'Натиснуто!';

// console.log(title);
// console.log(btn);

//

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//    const newP = document.createElement('p');
//    newP.textContent = 'Новий абзац додано!';
//    document.body.append(newP);
// });

//

// const btn = document.querySelector('.btn');
// let counter = 0;

// btn.addEventListener('click', () => {
//    counter++;
//    const newParagraph = document.createElement('p');
//    newParagraph.textContent = `📩 Нове повідомлення ${counter}`;
//    document.body.append(newParagraph);
// });

//

// const lightBtn = document.getElementById('lightBtn'),
//    darkBtn = document.getElementById('darkBtn');

// lightBtn.addEventListener('click', () => {
//    document.body.style.backgroundColor = '#fff';
//    document.body.style.color = '#000';
// });

// darkBtn.addEventListener('click', () => {
//    document.body.style.backgroundColor = '#333';
//    document.body.style.color = '#fff';
// });

//! Зміна теми

const btnTheme = document.getElementById('btn-theme');

btnTheme.addEventListener('click', () => {
   if (document.body.classList.contains('light')) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
   } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
   }
});

//! Додавання зображення

const buttonAdd = document.getElementById('btn-add-image');
buttonAdd.addEventListener('click', () => {
   const img = document.createElement('img');
   img.setAttribute(
      'src',
      'https://images.wallpaperscraft.ru/image/single/domik_zima_sneg_134709_1920x1080.jpg'
   );
   img.setAttribute('alt', 'засніжений будинок');
   img.style.width = '200px';

   document.body.append(img);
});

//! Додавання / видалення товару до списку.

const products = document.getElementById('wrapper'),
   addProduct = document.getElementById('addProduct'),
   productList = document.getElementById('productList');
let count = 0;

products.addEventListener('click', (e) => {
   e.preventDefault();

   const newLi = document.createElement('li');
   newLi.style.display = 'flex';
   newLi.style.justifyContent = 'space-between';
   newLi.style.alignItems = 'center';
   const deleteProduct = document.createElement('button');

   if (e.target.id == 'addProduct') {
      count++;
      newLi.setAttribute('id', `${count}`);
      deleteProduct.setAttribute('id', `${count}`);
      deleteProduct.textContent = '❌ Видалити товар';

      newLi.textContent = `Товар ${count}`;
      newLi.append(deleteProduct);

      productList.append(newLi);

      return;
   }

   if (e.target.tagName.toUpperCase() === 'BUTTON') {
      const liToRemove = e.target.closest('li'); // Знаходимо <li>, в якому знаходиться кнопка
      liToRemove.remove(); // Видаляємо його

      console.log(`Ви видалили товар № ${e.target.id}`);
   }
});

//

// const toggleBtn = document.getElementById('toggleBtn'),
//    box = document.getElementById('box');

// toggleBtn.addEventListener('click', () => {
//    box.classList.toggle('highlight');
// });

//

// const btn = document.getElementById('btn'),
//    heading = document.getElementById('title'),
//    pic = document.getElementById('pic');

// btn.addEventListener('click', () => {
//    heading.textContent = 'Текст змінено!';
//    pic.style.width = '100px';
//    pic.setAttribute('title', 'Натисни ще раз');
// });

//

// const removeBtn = document.getElementById('removeBtn'),
//    pic = document.getElementById('pic');

// removeBtn.addEventListener('click', () => {
//    pic.remove();
// });

//

// const addBtn = document.getElementById('addBtn'),
//    ref = document.getElementById('ref');

// let isFirst = true;

// addBtn.addEventListener('click', () => {
//    const newP = document.createElement('p');
//    newP.textContent = '🟢 Новий елемент';

//    if (isFirst) {
//       ref.before(newP);
//       isFirst = false;
//    } else {
//       ref.after(newP);
//    }
// });

//

// const title = document.getElementById('title'),
//    list = document.getElementById('list'),
//    btnAdd = document.getElementById('add');
// let count = 0;

// btnAdd.addEventListener('click', () => {
//    count++;
//    list.insertAdjacentHTML('beforeend', `<li>📦 Товар ${count}</li>`);
// });

//

// const list = document.getElementById('list'),
//    btnAdd = document.getElementById('remove');

// btnAdd.addEventListener('click', () => {
//    if (list.lastElementChild) {
//       list.lastElementChild.remove();
//    } else {
//       console.log('Список порожній');
//    }
// });

//

// const list = document.getElementById('list');
// const btnRem = document.getElementById('remove');

// btnRem.addEventListener('click', () => {
//    if (list.children.length === 0) {
//       console.log('Список уже порожній');
//    } else {
//       list.innerHTML = '';
//       console.log('Список очищено');
//    }
// });

//

// const btnToggle = document.getElementById('toggle');
// const square = document.getElementById('square');
// console.log(square);

// btnToggle.addEventListener('click', () => {
//    square.classList.toggle('large');
// });

//

// const list = document.getElementById('list'),
//    parentElement = list.parentElement,
//    firstElementChild = list.firstElementChild,
//    nextElementSibling = list.firstElementChild.nextElementSibling,
//    previousElementSibling = list.lastElementChild.previousElementSibling;

// console.log(parentElement);
// console.log(firstElementChild);
// console.log(nextElementSibling);
// console.log(previousElementSibling);

//! Типи подій в DOM

// document.body.addEventListener('keydown', (e) => {
//    console.log(e);
// });

// document.addEventListener('keydown', (e) => {
//    console.log(`Натиснуто клавішу: ${e.key}`);
// });

//

// const input = document.getElementById('nameInput');

// input.addEventListener('input', (e) => {
//    console.log(e.target.value);
// });

//

// const select = document.getElementById('country');
// select.addEventListener('change', (e) => {
//    const selectedText = select.options[select.selectedIndex].textContent;
//    console.log(`Ви обрали: ${selectedText}`);
// });

// const form = document.getElementById('nameForm');
// form.addEventListener('submit', (e) => {
//    e.preventDefault();
//    const username = form.username.value;
//    console.log(`Дані форми: ${username}`);
// });

//

// const form = document.getElementById('nameForm');
// form.addEventListener('submit', (e) => {
//    e.preventDefault();
//    const useremail = form.useremail.value;
//    let input = form.useremail;
//    if (useremail.includes('@')) {
//       input.style.border = '3px solid green';
//       console.log(`Дякуємо за підписку!`);
//    } else {
//       input.style.border = '3px solid red';
//       console.log('Ваш email має містити символ "@"!');
//    }
// });

//

// const form = document.getElementById('nameForm');
// const input = form.entoresc;

// input.addEventListener('keydown', (e) => {
//    e.preventDefault();

//    if (e.key === 'Enter') {
//       console.log('Ви підтвердили введення');
//    } else if (e.key === 'Escape') {
//       console.log('Введення скасовано');
//    }
// });

//

// const form = document.getElementById('nameForm');
// form.addEventListener('submit', (e) => {
//    e.preventDefault();

//    let inputUser = form.username;
//    let userLastname = form.userlastname;
//    let inputEmail = form.useremail;

//    const allFieldsFilled =
//       inputUser.value.trim() &&
//       userLastname.value.trim() &&
// inputEmail.value.trim();

//    if (allFieldsFilled.length > 0) {
//       inputEmail.style.border = '3px solid green';
//       console.log(
//          `Дякуємо за підписку! Ваше ім'я: ${inputUser.value}, Прізвище: ${userLastname.value}, Email: ${inputEmail.value}`
//       );
//    } else {
//       inputEmail.style.border = '3px solid red';
//       console.log('Заповніть усі поля!');
//    }
// });

//! Делегування подій для динамічних елементів

// const productList = document.getElementById('productList'),
//    addProduct = document.getElementById('addProduct'),
//    products = document.getElementById('products');
// let count = 0;

// productList.addEventListener('click', (e) => {
//    e.preventDefault();

//    const newLi = document.createElement('li');
//    if (e.target.id == 'addProduct') {
//       count++;
//       newLi.setAttribute('id', `${count}`);

//       newLi.textContent = `Товар ${count}`;

//       products.append(newLi);

//       return;
//    }
//    if (e.target.tagName.toLowerCase() === 'li') {
//       console.log(`Ви обрали товар № ${e.target.id}`);
//    }
// });

//

//
// function doubleArray(arr) {
//    let newArr = arr.map((item) => {
//       return item * 2;
//    });
//    return newArr;
// }

// console.log(doubleArray([1, 2, 3])); // [2, 4, 6]

// function doClousure() {
//    let counter = 0;
//    return function () {
//       counter++;
//       return counter;
//    };
// }

// let out = doClousure();

// console.log(out());
// console.log(out());
// console.log(out());

//

// const promise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve('Done!');
//    }, 1000);
// });

// promise.then((res) => {
//    console.log('Result:', res);
// });

//

// const promise = new Promise((resolve, reject) => {
//    reject('Something went wrong');
// });

// promise
//    .then((res) => {
//       console.log('Success:', res);
//    })
//    .catch((err) => {
//       console.log('Error:', err);
//    });

//

// const p = new Promise((resolve, reject) => {
//    resolve(1);
// });

// p.then((res) => {
//    console.log('Step 1:', res);
//    return res + 1;
// })
//    .then((res) => {
//       console.log('Step 2:', res);
//       throw new Error('Step 2 Failed');
//    })
//    .then((res) => {
//       console.log('Step 3:', res);
//    })
//    .catch((err) => {
//       console.log('Caught error:', err.message);
//    });

//

// async function fetchData() {
//    try {
//       const result = await Promise.resolve('Hello');
//       console.log('Got:', result);
//    } catch (e) {
//       console.error('Caught:', e);
//    }
// }

// fetchData();

//

// async function risky() {
//    const result = await Promise.reject('Boom');
//    console.log('After await:', result);
// }

// risky();

//

// console.log('A');

// setTimeout(() => console.log('B'), 0);

// Promise.resolve().then(() => console.log('C'));

// console.log('D');

//

// Promise.resolve()
//    .then(() => {
//       console.log('1');
//       return Promise.resolve();
//    })
//    .then(() => {
//       console.log('2');
//    });

// console.log('3');

//

// async function foo() {
//    console.log('foo start');
//    await Promise.resolve();
//    console.log('foo end');
// }

// console.log('script start');
// setTimeout(() => console.log('setTimeout'), 0);
// foo();
// Promise.resolve().then(() => console.log('promise then'));
// console.log('script end');

//

// Promise.resolve().then(() => {
//    console.log('first');
//    Promise.resolve().then(() => {
//       console.log('second');
//    });
// });

// console.log('outside');

//

// setTimeout(() => {
//    console.log('timeout start');
//    Promise.resolve().then(() => {
//       console.log('microtask inside timeout');
//    });
//    console.log('timeout end');
// }, 0);

// Promise.resolve().then(() => console.log('top microtask'));

// console.log('sync');

//! fetch-запити

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//    .then((response) => response.json())
//    .then((data) => console.log('Data:', data))
//    .catch((error) => console.error('Error:', error));

//

// fetch('https://jsonplaceholder.typicode.com/unknown')
//    .then((response) => response.json())
//    .then((data) => console.log('Data:', data))
//    .catch((error) => console.error('Error:', error));

//

// fetch('https://unknown-domain.example')
//    .then((response) => response.json())
//    .then((data) => console.log('Data:', data))
//    .catch((error) => console.error('Error:', error.message));

//

// async function fetchPost() {
//    try {
//       const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');

//       if (!res.ok) {
//          throw new Error('HTTP Error ' + res.status);
//       }

//       const data = await res.json();
//       console.log('Data:', data);
//    } catch (e) {
//       console.error('Caught error:', e.message);
//    }
// }

// fetchPost();

// async function fetchPost() {
//    try {
//       const res = await fetch(
//          'https://jsonplaceholder.typicode.com/posts/123456'
//       ); // неіснуючий ID

//       if (!res.ok) {
//          throw new Error('HTTP Error ' + res.status);
//       }

//       const data = await res.json();
//       console.log('Data:', data);
//    } catch (e) {
//       console.error('Caught error:', e.message);
//    }
// }

// fetchPost();

//

// async function fetchAndValidateUser(id) {
//    try {
//       const res = await fetch(
//          `https://jsonplaceholder.typicode.com/users/${id}`
//       );

//       if (!res.ok) {
//          throw new Error('HTTP Error ' + res.status);
//       }

//       let data;
//       try {
//          data = await res.json();
//       } catch (e) {
//          throw new Error('Invalid JSON: ' + e.message);
//       }

//       if (!data.name || data.name.trim() === '') {
//          throw new Error('Invalid user data');
//       }

//       console.log(`User: ${data.name}`);
//    } catch (e) {
//       console.error('Caught error:', e.message);
//    }
// }

// fetchAndValidateUser(1);

//

// async function slowFetchWithAbort() {
//    const controller = new AbortController(); // створюємо "пульт відміни"
//    const signal = controller.signal;

//    // Запустимо скасування через 2 секунди
//    setTimeout(() => {
//       console.log('⏳ Скасування запиту...');
//       controller.abort(); // натискаємо "Stop"
//    }, 2000);

//    try {
//       console.log('▶ Старт запиту...');
//       const res = await fetch('https://httpbin.org/delay/5', { signal });
//       // httpbin.org/delay/5 — спеціальне API, яке відповідає через 5 секунд

//       const data = await res.json();
//       console.log('✅ Отримали дані:', data);
//    } catch (err) {
//       if (err.name === 'AbortError') {
//          console.error('❌ Запит було скасовано!');
//       } else {
//          console.error('⚠ Інша помилка:', err.message);
//       }
//    }
// }

// slowFetchWithAbort();

//

// function createCounter() {
//    let counter = 0;
//    return function () {
//       counter++;
//       return counter;
//    };
// }

// const a = createCounter();

// console.log(a());
// console.log(a());
// console.log(a());

// let a = createCounter();

// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());

//

// function outer() {
//    let counter = 0;
//    return function () {
//       counter++;
//       return counter;
//    };
// }
// const inc = outer();
// inc(); // 1
// inc(); // 2
// console.log(inc());
// console.log(inc());
// console.log(inc());
// console.log(inc());
// console.log(inc());

//

// function a() {
//    let first = 'a';
//    function b() {
//       let second = 'b';
//       function c() {
//          let third = 'c';
//          console.log(first, second, third);
//       }
//       c();
//    }
//    b();
// }

// a();

//

// let a = 10;

// function out() {
//    let a = 20;
//    console.log(a); // 20
// }
// out();

//

// let x = 5;

// function foo() {
//    console.log(x);
// }

// function bar() {
//    let x = 10;
//    foo();
// }

// bar();

//

// function outer() {
//    let count = 0;
//    function inner() {
//       count++;
//       console.log(count);
//    }
//    return inner;
// }

// const fn1 = outer();
// const fn2 = outer();

// fn1();
// fn1();
// fn2();

//

// let z = 1;

// {
//    let z = 2;
//    {
//       let z = 3;
//       console.log(z);
//    }
//    console.log(z);
// }
// console.log(z);

//

// function makeMultiplier(multiplier) {
//    return function (x) {
//       return x * multiplier;
//    };
// }

// const double = makeMultiplier(2);
// const triple = makeMultiplier(3);

// console.log(double(5));
// console.log(triple(5));

//

// function makeAdder(x) {
//    return function (y) {
//       return x + y;
//    };
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2));
// console.log(add10(2));
// console.log(add5(10));

//

// function once(fn) {
//    let called = false;
//    let result;
//    return function (...args) {
//       if (!called) {
//          result = fn(...args);
//          called = true;
//       }
//       return result;
//    };
// }

// const logOnce = once((msg) => {
//    console.log('LOG:', msg);
//    return msg.length;
// });

// console.log(logOnce('hello'));
// console.log(logOnce('world'));

//

// function tricky() {
//    let secret = 'hidden';
//    return {
//       getSecret: () => secret,
//       setSecret: (newValue) => {
//          secret = newValue;
//       },
//    };
// }

// const obj = tricky();
// obj.setSecret('changed');
// console.log(obj.getSecret());

//

// for (var i = 0; i < 3; i++) {
//    setTimeout(() => console.log(i), 100);
// }

//! typeoff instanceoff

// console.log(typeof null);
// console.log(typeof [1, 2, 3]);
// console.log(typeof { a: 1 });

// function b() {}
// console.log(typeof b);

//

// console.log([] instanceof Array); // true
// console.log([] instanceof Object); // true (бо Array → Object)
// console.log({} instanceof Object); // true
// console.log(new Date() instanceof Date); // true
// console.log(new Date() instanceof Object); // true

//

// // 1
// console.log(typeof null); //

// // 2
// console.log(typeof NaN);

// // 3
// console.log(typeof (() => {}));

// // 4
// console.log([] instanceof Array);

// // 5
// console.log([] instanceof Object);

// // 6
// function Foo() {}
// const obj = new Foo();
// console.log(obj instanceof Foo);

// // 7
// console.log(null instanceof Object);

// // 8
// const iframeArray = window.frames[0]?.Array;
// const arr = iframeArray ? new iframeArray() : [];
// console.log(arr instanceof Array);

//

// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof NaN);
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof function () {});
// console.log(typeof new String('hi'));
// console.log(typeof Symbol('id'));
// console.log(typeof 10n);
// console.log(typeof /abc/);

//

// class A {}
// class B extends A {}

// const a = new A();
// const b = new B();
// const arr = [];
// const date = new Date();

// console.log(arr instanceof Function);

//! Рекурсія

// const tree = {
//    name: 'root',
//    children: [
//       { name: 'child1', children: [] },
//       { name: 'child2', children: [{ name: 'grandchild1', children: [] }] },
//    ],
// };

// function traverse(node) {
//    console.log(node.name);
//    for (const child of node.children) {
//       traverse(child); // рекурсія
//    }
// }

// traverse(tree);

//! Напиши функцію sumTo(n), яка обчислює суму всіх чисел від 1 до n рекурсивно.

// function sumTo(n) {
//    if (n === 1) {
//       return n;
//    } else {
//       return n + sumTo(n - 1);
//    }
// }

// console.log(sumTo(4));

//! Напиши рекурсивну функцію pow(x, n), яка обчислює x в степені n.

// console.log(-3 % -3 === 0);
// console.log(1 / 2 / 2 / 2);

// function pow(x, n) {
//    if (x === 1 || n === 1 || n === 0) {
//       return x;
//    } else if (x === 0 && n < 0) {
//       return false;
//    } else if (x > 0 && n < 0) {
//       return Math.pow(x, n);
//    } else if (x > 0 && n < 0 && n % n === -1) {
//       return console.log('aaa'); // (x * pow(x, n - -1))
//    } else if (x < 0 && n < 0 && n % 0) {
//       return console.log('x * pow(x, -n - 1) * -1'); // x * pow(x, -n - 1) * -1
//    } else if (x > 0 && n === -1) {
//       return -x;
//    } else {
//       return x * pow(x, n - 1);
//    }
// }

// console.log(pow(2, -3));

//! Напиши рекурсивну функцію fib(n), яка повертає n-е число Фібоначчі.

function fib(x) {
   return x;
}

console.log(fib(6)); // 8

// //! Є масив, що містить числа та інші масиви. Потрібно знайти суму всіх чисел, незалежно від глибини вкладення.

// sumNested([1, [2, [3, 4]], 5]); // 15

// //! Є об’єкт з довільною кількістю вкладених об’єктів. Потрібно вивести всі ключі та значення (якщо значення — теж об’єкт, обійти його).

// printNested({
//   a: 1,
//   b: { c: 2, d: { e: 3 } }
// })
// // a: 1
// // c: 2
// // e: 3
