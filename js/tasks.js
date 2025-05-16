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

class Animal {
   constructor(name) {
      this.name = name;
   }

   speak() {
      console.log(`Я тварина, мене звати ${this.name}`);
   }
}

class Dog extends Animal {
   constructor(name, breed) {
      super(name);
      this.breed = breed;
   }
   bark() {
      console.log('Гав-гав!');
   }

   info() {
      console.log(`Я породи ${this.breed} і мене звати ${this.name}`);
   }
}

const cow = new Animal('Murka');
const cow2 = new Animal('Lyska');
const cow3 = new Animal('Kalynka');

cow.speak();
cow2.speak();
cow3.speak();

const dog = new Dog('Muchtar', 'Vivcharcka');

dog.speak();
dog.bark();
dog.info();
