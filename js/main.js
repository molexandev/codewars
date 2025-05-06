'use strict';

//TODO Вам дадуть слово. Ваше завдання - повернути середній символ слова. Якщо довжина слова непарна, поверніть середній символ. Якщо довжина слова парна, поверніть 2 середніх символи. #Приклади:

//* Kata.getMiddle("test") should return "es"

//* Kata.getMiddle("testing") should return "t"

//* Kata.getMiddle("middle") should return "dd"

//* Kata.getMiddle("A") should return "A"

// todo Введення. Слово (рядок) довжини 0 < str < 1000(у javascript ви можете отримати трохи більше 1000 у деяких тестових випадках через помилку в тестових випадках). Тестувати для цього не потрібно. Це лише для того, щоб сказати вам, що вам не потрібно турбуватися про те, що час очікування вашого рішення закінчиться. Вихід: Середній символ(и) слова, представленого у вигляді рядка.

// function getMiddle(s) {
//    let str = s.split('');
//    let midelem = Math.floor(str.length / 2),
//       midelem2 = str.length / 2 - 1,
//       midelem3 = str.length / 2;

//    if (str.length % 2 > 0) {
//       return str[midelem];
//    } else {
//       return str[midelem2] + str[midelem3];
//    }
// }

// console.log(getMiddle('wordsisbeautiful   '));

// TODO Це досить просто. Ваша мета — створити функцію, яка видаляє перший і останній символи рядка. Вам надається один параметр, вихідний рядок. Вам не потрібно турбуватися про рядки з менш ніж двома символами.

// Var 1

// function removeChar(str) {
//    let string = str.split(''); // Розбиваємо рядок на масив символів
//    string.pop(); // Видаляємо останній символ
//    string.shift(); // Видаляємо перший символ
//    return string.join(''); // Об'єднуємо масив назад у рядок і повертаємо результат
// }

// console.log(removeChar('world'));

// Var 2

// function removeChar(str) {
//    return str.slice(1, -1);
// }

// console.log(removeChar('world'));

// TODO Напишіть функцію, яка приймає ціле число n та рядок s як параметри та повертає рядок із s рівним повторенням n.Приклади (введення -> вихід)

//* 6, "I"     -> "IIIIII"
//* 5, "Hello" -> "HelloHelloHelloHelloHello"

// function repeatStr(n, s) {
//    let str = '';
//    for (let i = 1; i <= n; i++) {
//       str += s;
//    }
//    return str;
// }

// console.log(repeatStr(77, 'World'));

// TODO Напишіть функцію для перетворення імені в ініціали. Ця ката містить два слова з одним пробілом між ними. На виході має бути дві великі літери з крапкою. Це має виглядати так:

//* Сем Харріс => S.H

//* Патрік Фіні => P.F

// function abbrevName(name) {
//    let arr = name.split(' ');
//    let initials = arr.map((item) => item.slice(0, 1)).join('.');
//    return initials.toUpperCase();
// }

// console.log(abbrevName('taras shevchenko'));

// TODO Завершіть функцію суми квадратів, щоб вона звела в квадрат кожне передане їй число, а потім підсумувала результати.

//* Наприклад, for [1, 2, 2]має повернутися 9тому що

// function squareSum(numbers) {
//    let squares = numbers.map((num) => {
//       return num * num;
//    });
//    return squares.length !== 0 ? squares.reduce((a, b) => a + b) : 0;
// }

// console.log(squareSum([2, 3, 5]));

// TODO Музей неймовірно нудних речей. Музей неймовірно нудних речей хоче позбутися деяких експонатів. Міріам, архітектор інтер’єрів, придумує план прибрати найнудніші експонати. Вона дає їм оцінку, а потім видаляє того, хто має найнижчий рейтинг. Однак як тільки вона закінчила оцінювати всі експонати, вона вирушила на важливий ярмарок, тому вона просить вас написати програму, яка повідомлятиме їй рейтинги експонатів після видалення найнижчого. Справедливо. завдання

// TODO Дано масив цілих чисел, вилучіть найменше значення. Не змінюйте оригінальний масив/список. Якщо є кілька елементів з однаковим значенням, видаліть той із найнижчим індексом. Якщо ви отримуєте порожній масив/список, поверніть порожній масив/список. Не змінюйте порядок елементів, які залишилися.

// Приклади
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

// function removeSmallest(numbers) {
//    if (numbers.length === 0) {
//       return [];
//    }

//    let minValue = Math.min(...numbers);
//    let minIndex = numbers.indexOf(minValue);
//    return numbers.slice(0, minIndex).concat(numbers.slice(minIndex + 1));
// }

// console.log(removeSmallest([2, 3, 5, 1, 7, 1]));
// console.log(removeSmallest([]));

//TODO Створіть просту функцію під назвою greet, яка повертає найвідоміше "hello world!". Очки стилю Звичайно, це настільки просто, наскільки це можливо. Але наскільки розумним ви можете бути, щоб створити найкреативніший "привіт, світ", який тільки можете придумати? Яке рішення «привіт, світ» ви хотіли б показати своїм друзям?

// const greet = (sayHello) => sayHello;
// function greet() {
//    return 'hello world!';
// }
// console.log(greet('Hello World!'));

//TODO У маленькому місті чисельність населення становить p0 = 1000 на початку року. Населення регулярно збільшується на 2% з кожним роком і більше того, 50 щороку в місто приїжджають жити нові жителі. Скільки років потрібно місту, щоб його населення перевищувало або дорівнювало p = 1200 жителям?

//TODO Наприкінці першого року буде: 1000 + 1000 * 0,02 + 50 => 1070 мешканців.
//TODO Наприкінці 2 - го курсу буде:   житель(** кількість жителів є цілим числом **)
//TODO Наприкінці 3-го курсу буде: 1141 + 1141 * 0,02 + 50 => 1213 На це знадобиться цілих 3 роки.

//TODO Більш загальні параметри: p0, percent, aug (мешканців, які приїжджають або виїжджають щороку), p (населення дорівнювати або перевищувати).
//TODO функція nb_yearмає повертати nкількість повних років, необхідних для отримання чисельності населення, більшої або рівної p. aug — ціле число, відсоток — додатне або нульове плаваюче число, p0 і p — додатні цілі числа(> 0)

//TODO Примітка: Не забудьте перетворити параметр percent як відсоток у тілі вашої функції: якщо параметр percent дорівнює 2, ви повинні перетворити його на 0,02. Немає фракцій людей. Наприкінці кожного року чисельність населення є цілим числом: 252.8 округляються до 252 осіб.

// function nbYear(p0, percent, aug, p) {
//    let currentPopulation = p0;
//    let years = 0;

//    while (currentPopulation < p) {
//       currentPopulation +=
//          Math.floor(currentPopulation * (percent / 100)) + aug;
//       years++;
//    }

//    return years;
// }

// console.log(nbYear(1500, 5, 100, 5000));

// TODO На фабриці принтер друкує етикетки для коробок. Для одного типу коробок друкар має використовувати кольори, які для простоти названо літерами з a до m. Кольори, які використовує принтер, записуються в контрольний рядок. Наприклад, «хороший» контрольний рядок означатиме, aaabbbbhaijjjm що принтер використав тричі колір a, чотири рази b, один раз колір h, потім один раз колір a...

// TODO Іноді виникають проблеми: відсутність кольорів, технічна несправність і створюється "поганий" контрольний рядок, наприклад, aaaxbbbbyyhwawiwjjjwwm з літерами не з a до m. Ви повинні написати функцію printer_error, яка, заданий рядок, повертатиме частоту помилок принтера як рядок, що представляє раціональне число, чисельник якого є кількістю помилок, а знаменник – довжиною рядка керування.Не зводьте цей дріб до більш простого виразу.Рядок має довжину більше або дорівнює одиниці і містить лише літери від a до z.

//* s="aaabbbbhaijjjm"
//* printer_error(s) => "0/14"

//* s="aaaxbbbbyyhwawiwjjjwwm"
//* printer_error(s) => "8/22"

// function printerError(s) {
//    let strToArr = s.split('');

//    let numErrors = 0,
//       strLength = strToArr.length;

//    strToArr.forEach((item, i) => {
//       if (item.charCodeAt() > 109) {
//          numErrors++;
//       }
//    });

//    return String(`${numErrors}/${strLength}`);
// }

// // console.log(String.fromCharCode(97, 122));

// // m - 109

// console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'));

// TODO Ваше завдання полягає в тому, щоб створити функцію, яка може приймати будь-яке невід’ємне ціле число як аргумент і повертати його разом із цифрами в порядку спадання. По суті, переставте цифри, щоб отримати найбільше можливе число.

//* Вхід: 42145 Вихід:54421
//* Вхід: 145263 Вихід:654321
//* Вхід: 123456789 Вихід:987654321

// function descendingOrder(n) {
//    let str = n.toString(),
//       newNumber = str.split('').sort((a, b) => b - a);
//    return +newNumber.join('');
// }

// console.log(descendingOrder(123549807));

// TODO Розгляньте масив/список овець, де деякі з овець можуть бути відсутні на своєму місці. Нам потрібна функція, яка підраховує кількість овець у масиві (true означає наявність). Підказка: не забудьте перевірити наявність неправильних значень, наприклад null/undefined

//* [true,  true,  true,  false,
//*   true,  true,  true,  true ,
//*   true,  false, true,  false,
//*   true,  false, false, true ,
//*   true,  true,  true,  true ,
//*   false, false, true,  true]
//* Правильною відповіддю буде 17.

// function countSheeps(sheep) {
//    let counter = 0;
//    sheep.map((item) => {
//       if (item === true) {
//          counter++;
//       }
//    });
//    return counter;
// }

// console.log(
//    countSheeps([
//       true,
//       true,
//       true,
//       false,
//       true,
//       true,
//       true,
//       true,
//       true,
//       false,
//       true,
//       false,
//       true,
//       false,
//       false,
//       true,
//       true,
//       true,
//       true,
//       true,
//       false,
//       false,
//       true,
//       true,
//    ])
// );

// TODO Ваше завдання полягає в тому, щоб створити дві функції ( maxі min, або maximum і minimum тощо, залежно від мови ), які отримуватимуть список цілих чисел як вхідні дані та повертатимуть найбільше та найменше число у цьому списку відповідно.

//* Приклади (Input -> Output)
//* * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
//* * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
//* * [42, 54, 65, 87, 0]             -> min = 0, max = 87
//* * [5]                             -> min = 5, max = 5
//* Примітки
//* Ви можете вважати, що порожніх масивів/векторів не буде.

// let min = function (list) {
//    let arr = list;
//    return Math.min(...arr);
// };

// let max = function (list) {
//    let arr = list;
//    return Math.max(...arr);
// };

// console.log(min([5, 18, 79, 98, 3, 12])); // 3
// console.log(min([-158, -3, 28, 59, 79, 5])); // -158
// console.log(max([99, 36, 19, 95, 33, 44, 8])); // 99
// console.log(max([63, 669, 105, -4, 68, 777])); // 777

// TODO Історія: Боб працює водієм автобуса. Проте він став надзвичайно популярним серед мешканців міста. З такою кількістю пасажирів, які хочуть сісти в його автобус, йому іноді доводиться стикатися з проблемою, що в автобусі не вистачає місця! Він хоче, щоб ви написали просту програму, яка повідомляє йому, чи зможе він розмістити всіх пасажирів.

// TODO Огляд завдань: Ви повинні написати функцію, яка приймає три параметри: cap - це кількість людей, які може вмістити автобус, за винятком водія. on - кількість людей в автобусі без водія. wait це - кількість людей, які чекають на посадку в автобус, за винятком водія. Якщо місця достатньо, поверніть 0, а якщо немає, поверніть кількість пасажирів, яких він не може прийняти.

//* Приклади використання:
//* cap = 10, on = 5, wait = 5 --> 0 # Він може вмістити всіх 5 пасажирів
//* cap = 100, on = 60, wait = 50 --> 10 # Він не вміщує 10 із 50 чекаючих

// function enough(cap, on, wait) {
//    let num = cap - on;
//    return num > wait ? 0 : wait - num;
// }

// console.log(enough(100, 90, 50));
// console.log(enough(100, 90, 5));

// TODO Наша футбольна команда завершила чемпіонат. Результати матчів нашої команди записуються в колекцію рядків. Кожен матч представлено рядком у форматі "x:y", де x– рахунок нашої команди, а y – рахунок наших суперників.

//* Наприклад: ["3:1", "2:2", "0:1", ...]

// TODO Очки нараховуються за кожен матч таким чином:
// TODO якщо x > y: 3 бали (перемога)
// TODO якщо x < y: 0 балів (програш)
// TODO якщо x = y: 1 бал (рівня)
// TODO Нам потрібно написати функцію, яка приймає цю колекцію та повертає кількість очок, які наша команда ( x) отримала в чемпіонаті за правилами, наведеними вище.

// TODO Примітки: наша команда завжди грає 10 матчів у чемпіонаті
// TODO 0 <= x <= 4
// TODO 0 <= y <= 4

// let arr = [
//       '3:1',
//       '2:2',
//       '0:1',
//       '1:1',
//       '1:3',
//       '2:3',
//       '5:0',
//       '1:0',
//       '1:5',
//       '2:1',
//    ], // 14
//    arr2 = [
//       '1:0',
//       '2:0',
//       '3:0',
//       '4:0',
//       '2:1',
//       '3:1',
//       '4:1',
//       '3:2',
//       '4:2',
//       '4:3',
//    ], //30
//    arr3 = [
//       '1:1',
//       '2:2',
//       '3:3',
//       '4:4',
//       '2:2',
//       '3:3',
//       '4:4',
//       '3:3',
//       '4:4',
//       '4:4',
//    ]; // 10

// function points(games) {
//    let count = 0;
//    games.forEach((pair) => {
//       let [first, second] = pair.split(':');

//       if (first > second) {
//          count += 3;
//       } else if (first == second) {
//          count += 1;
//       } else if (first < second) {
//          count += 0;
//       }
//    });

//    return count;
// }

// console.log(points(arr));
// console.log(points(arr2));
// console.log(points(arr3));

// TODO Мета цієї вправи полягає в тому, щоб перетворити рядок на новий рядок, де кожен символ у новому рядку є таким, "("якщо цей символ з’являється лише один раз у вихідному рядку або ")"якщо цей символ з’являється більше одного разу у вихідному рядку. Ігноруйте великі літери, коли визначаєте, чи є символ дублікатом. Приклади

//* "din"      =>  "((("
//* "recede"   =>  "()()()"
//* "Success"  =>  ")())())"
//* "(( @"     =>  "))(("
//* Примітки
//* Повідомлення про твердження можуть бути незрозумілими щодо того, що вони відображають у деяких мовах. Якщо ви читаєте "...It Should encode XXX", це "XXX"очікуваний результат, а не вхідні дані!

// function duplicateEncode(str) {
//    let lowerStr = str.toLowerCase(); // Приводимо рядок до нижнього регістру
//    let charCount = {}; // Об'єкт для підрахунку кількості символів

//    // Підраховуємо кількість появ кожного символу
//    for (let char of lowerStr) {
//       charCount[char] = (charCount[char] || 0) + 1;
//    }

//    // Формуємо новий рядок на основі кількості появ символів
//    let result = '';
//    for (let char of lowerStr) {
//       if (charCount[char] > 1) {
//          result += ')'; // Якщо символ зустрічається більше одного разу
//       } else {
//          result += '('; // Якщо символ зустрічається лише один раз
//       }
//    }

//    return result;
// }

// const pass = prompt('Password');
// console.log(pass.replace(/./g, '*'));

// console.log(duplicateEncode('din'));
// console.log(duplicateEncode('recede'));
// console.log(duplicateEncode('Success'));
// console.log(duplicateEncode('(( @'));

// TODO Дуже просто, якщо задано число (ціле / десяткове / обидва залежно від мови), знайти його протилежність (адитивне зворотне).

// * приклади:
// * 1: -1
// * 14: -14
// * -34: 34

// function opposite(number) {
//    return number - number * 2;
// }

// console.log(opposite(12));
// console.log(opposite(17));
// console.log(opposite(-7));
// console.log(opposite(-798));

// TODO Вам буде надано масив a і значення x. Все, що вам потрібно зробити, це перевірити, чи наданий масив містить значення. Масив може містити числа або рядки. X може бути будь-яким. Повертає true, якщо масив містить значення, falseякщо ні.

// function check(a, x) {
//    return a.some((item) => item === x);
// }

// console.log(check([101, 45, 75, 105, 99, 107], 107));
// console.log(check(['what', 'a', 'great', 'kata'], 'kat'));

// TODO Ви маєте набір слів, щоб знайти слово з найвищим балом. Кожна літера слова отримує бали відповідно до її позиції в алфавіті: a = 1, b = 2, c = 3 etc. Наприклад, оцінка abad( 8 - бо 1 + 2 + 1 + 4). Вам потрібно повернути слово з найвищим балом у вигляді рядка. Якщо два слова мають однакові результати, повертається слово, яке з’являється першим у вихідному рядку. Усі літери будуть малими, і всі введені дані будуть дійсними.

// function high(sentence) {
//    const words = sentence.split(' ');

//    const scoreWord = (word) => {
//       return word
//          .split('')
//          .reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0);
//    };

//    let highestScore = 0;
//    let highestWord = '';

//    for (let word of words) {
//       let score = scoreWord(word);
//       if (score > highestScore) {
//          highestScore = score;
//          highestWord = word;
//       }
//    }

//    return highestWord;
// }

// console.log(high('man i need a taxi up to ubud')); // taxi
// console.log(high('what time are we climbing up the volcano')); // volcano
// console.log(high('take me to semynak')); // semynak
// console.log(high('aa b')); // aa

// TODO Ваше завдання — написати функцію, яка повертає -й n член наступного ряду, який є сумою перших n членів послідовності ( n є вхідним параметром). Щоб завершити це, вам потрібно буде з’ясувати правило ряду. Вам потрібно округлити відповідь до 2 знаків після коми та повернути її як рядок. Якщо задане значення є 0, воно має повернути "0.00". Як аргументи вам будуть надані лише натуральні числа.

//* Приклади (введення --> вихід)
//* n
//* 1 --> 1 --> "1.00"
//* 2 --> 1 + 1/4 --> "1.25"
//* 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// function SeriesSum(n) {
//    let i = 0,
//       sum = 0,
//       divider = 1;
//    let num = 1;

//    while (i < n) {
//       sum += num / divider;
//       i++;
//       divider += 3;
//    }

//    if (n === 0) {
//       return '0.00';
//    } else {
//       return sum.toFixed(2).toString();
//    }
// }

// console.log(SeriesSum(0)); // '0.00'
// console.log(SeriesSum(2)); // '1.25'
// console.log(SeriesSum(3)); // '1.39'
// console.log(SeriesSum(5)); // '1.57'
// console.log(SeriesSum(7)); // '1.68'

// TODO У цьому маленькому завданні вам надається рядок чисел, розділених пробілами, і ви повинні повернути найбільше та найменше число. Приклади

//* highAndLow("1 2 3 4 5");  // return "5 1"
//* highAndLow("1 2 -3 4 5"); // return "5 -3"
//* highAndLow("1 9 3 4 -5"); // return "9 -5"

// TODO Примітки: Усі номери дійсні Int32, перевіряти їх не потрібно. У вхідному рядку завжди буде принаймні одне число. Вихідний рядок має складатися з двох чисел, розділених одним пробілом, причому першим є найвище число.

// function highAndLow(numbers) {
//    let numMax = numbers.split(' ');
//    let numMin = numbers.split(' ');
//    let str = '';
//    return (str = `${Math.max(...numMax)} ${Math.min(...numMin)}`);
// }

// console.log(highAndLow('1 2 3 4 5')); // 5 1
// console.log(highAndLow('1 2 -3 4 5')); // 5 -3
// console.log(highAndLow('1 9 3 4 -5')); // 9 -5

// TODO Добре познайомився зі старшим братом Фібоначчі, він же Трібоначчі. Як уже видно з назви, він працює як Фібоначчі, але підсумовує останні 3 (замість 2) числа послідовності для генерації наступного. І, що гірше, я, на жаль, не почую, як італійці, які не є рідною мовою, намагаються її вимовити :(

// TODO Отже, якщо ми хочемо розпочати нашу послідовність Трибоначчі з [1, 1, 1]початкового введення (також відомого як підпис ), у нас буде така послідовність:
//* [1, 1, 1, 3, 5, 9, 17, 31, ...]

// TODO Але що, якби ми почали з [0, 0, 1]підпису? Оскільки [0, 1]замість того , щоб зсунути[1, 1] звичайну послідовність Фібоначчі на одне місце, у вас може виникнути спокуса подумати, що ми отримаємо ту саму послідовність, зміщену на 2 місця, але це не так, і ми отримаємо:
//* [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

// TODO Що ж, можливо, ви вже здогадалися, але щоб було зрозуміло: вам потрібно створити функцію Фібоначчі, яка, задана масивом/списком підписів , повертає перші n елементів — підпис, включений у так засіяну послідовність. Підпис завжди буде містити 3 цифри; n завжди буде невід’ємним числом; if n == 0, тоді поверніть порожній масив (окрім C повертає NULL) і будьте готові до будь-чого іншого, що не є чітко визначеним;)

// function tribonacci(signature, n) {
//    if (n <= 3) return signature.slice(0, n);

//    let result = [...signature];

//    for (let i = 3; i < n; i++) {
//       result[i] = result[i - 1] + result[i - 2] + result[i - 3];
//    }

//    return result;
// }

// console.log(tribonacci([1, 1, 1], 10)); // [1,1,1,3,5,9,17,31,57,105]
// console.log(tribonacci([0, 0, 1], 10)); // [0,0,1,1,2,4,7,13,24,44]
// console.log(tribonacci([0, 1, 1], 10)); // [0,1,1,2,4,7,13,24,44,81]
// console.log(tribonacci([1, 0, 0], 10)); // [1,0,0,1,1,2,4,7,13,24]
// console.log(tribonacci([0, 0, 0], 10)); // [0,0,0,0,0,0,0,0,0,0]
// console.log(tribonacci([1, 2, 3], 10)); // [1,2,3,6,11,20,37,68,125,230]
// console.log(tribonacci([1, 1, 1], 1)); // [1]
// console.log(tribonacci([300, 200, 100], 0)); // []

// TODO Напишіть функцію, persistenceяка приймає додатний параметр numі повертає його мультиплікативну стійкість, яка є кількістю разів, які ви повинні помножити цифри, numпоки не досягнете єдиної цифри.

// function persistence(num) {
//    let count = 0;

//    while (num >= 10) {
//       num = num
//          .toString()
//          .split('')
//          .reduce((acc, digit) => acc * Number(digit), 1);

//       count++;
//    }

//    return count;
// }

// console.log(persistence(39)); // 3
// console.log(persistence(4)); // 0
// console.log(persistence(25)); // 2
// console.log(persistence(999)); // 4

// TODO Вам буде надано масив чисел. Ви повинні відсортувати непарні числа в порядку зростання, залишаючи парні числа на вихідних позиціях.

//* [7, 1]  =>  [1, 7]
//* [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//* [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//* Далі, перебираючи початковий масив, можна замінити кожне непарне число на відповідне зі списку відсортованих, залишаючи парні числа на своїх місцях.

// function sortArray(array) {
//    let newArr = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
//    let index = 0;
//    return array.map((num) => (num % 2 !== 0 ? newArr[index++] : num));
// }

// console.log(sortArray([7, 1]));
// console.log(sortArray([7, 1, 2]));
// console.log(sortArray([5, 8, 6, 3, 4]));
// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

// TODO Дитина грається з м'ячем на n-му поверсі висотного будинку. Висота цього поверху над рівнем землі h відома. Він кидає м'яч із вікна. М'яч відскакує (наприклад) на дві третини своєї висоти (відскок 0,66). Мати дивиться у вікно, що на відстані півтора метра від землі. Скільки разів мама побачить м’яч, що проходить перед її вікном (включаючи, коли він падає і підстрибує)?

// TODO Для правильного експерименту необхідно виконати три умови: Параметр float "h" у метрах має бути більше 0 Параметр float "bounce" має бути більше 0 і менше 1 Параметр float "window" має бути меншим за h. Якщо виконано всі три вищенаведені умови, поверніть додатне ціле число, інакше поверніть -1. Примітка: М'яч можна побачити, лише якщо висота м'яча, що відскакує, строго перевищує параметр вікна.

//* - h = 3, bounce = 0.66, window = 1.5, result is 3
//*
//* - h = 3, bounce = 1, window = 1.5, result is -1
//*
//* (Condition 2) not fulfilled).

// function bouncingBall(h, bounce, window) {
//    if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
//       let index = 1;

//       for (let i = 1; window < h * bounce; i++) {
//          h *= bounce;
//          index = i * 2 + 1;
//       }

//       return index;
//    } else {
//       return -1;
//    }
// }

// console.log(bouncingBall(150, 0.66, 1.5)); // 23
// console.log(bouncingBall(3.0, 0.66, 1.5)); // 3
// console.log(bouncingBall(30.0, 0.66, 1.5)); // 15
// console.log(bouncingBall(3.0, 1.0, 1.5)); // -1

// TODO Після важкої роботи в офісі ви вирішили трохи відпочити у відпустці. Тож ви забронюєте рейс для себе та вашої дівчини та спробуєте залишити весь безлад позаду. Вам знадобиться орендований автомобіль, щоб пересуватися під час відпустки. Менеджер автопрокату робить вам вигідні пропозиції. Кожен день оренди автомобіля коштує 40 доларів. Якщо ви орендуєте автомобіль на 7 і більше днів, ви отримуєте знижку 50 доларів США. Крім того, якщо ви орендуєте автомобіль на 3 або більше днів, ви отримуєте 20 доларів США від загальної суми. Напишіть код, який видає загальну суму за різні дні (d).

// function rentalCarCost(d) {
//    let price = 40,
//       disc1 = 20,
//       disc2 = 50;

//    if (d < 3) {
//       return price * d;
//    } else if (d >= 3 && d < 7) {
//       return price * d - disc1;
//    } else if (d >= 7) {
//       return price * d - disc2;
//    }

//    return price;
// }

// console.log(rentalCarCost(1));
// console.log(rentalCarCost(2));
// console.log(rentalCarCost(3));
// console.log(rentalCarCost(5));
// console.log(rentalCarCost(6));
// console.log(rentalCarCost(7));
// console.log(rentalCarCost(17));

// TODO До кас самообслуговування в супермаркеті стоїть черга. Ваше завдання — написати функцію для обчислення загального часу, необхідного всім клієнтам для виписки! введення:
// TODO - клієнти: масив натуральних чисел, що представляють чергу. Кожне ціле число представляє клієнта, а його значення — кількість часу, який йому потрібен для виписки. n: натуральне число, кількість кас. вихід. Функція має повертати ціле число, загальний необхідний час. важливо Перегляньте приклади та пояснення нижче, щоб переконатися, що ви правильно зрозуміли завдання:)

// * queueTime([5, 3, 4], 1);
// should return 12
// because when there is 1 till, the total time is just the sum of the times

// * queueTime([10, 2, 3, 3], 2);
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

// * queueTime([2, 3, 10], 2);

// function queueTime(customers, n) {
//    if (customers.length == 0) {
//       return 0;
//    } else if (n >= customers.length) {
//       return Math.max(...customers);
//    } else if (n < customers.length) {
//       let tills = Array(n).fill(0);

//       for (let i = 0; i < customers.length; i++) {
//          let index = tills.indexOf(Math.min(...tills));
//          tills[index] += customers[i];
//          console.log(tills[index]);
//       }
//       return Math.max(...tills);
//    }
// }

// console.log(queueTime([], 1)); // 0
// console.log(queueTime([1, 2, 3, 4], 1)); // 10
// console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); // 9
// console.log(queueTime([1, 2, 3, 4, 5], 100)); // 5
// console.log(queueTime([10, 2, 3, 3], 2)); // 10

// TODO Дано масив цілих чисел у вигляді рядків і чисел, повернути суму значень масиву так, якби всі були числами.Поверніть свою відповідь у вигляді числа.

// function sumMix(x) {
//    let num = 0;
//    x.forEach((item) => {
//       num += +item;
//    });
//    return num;
// }

// console.log(sumMix([9, 3, '7', '3'])); // 22
// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])); // 42
// console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])); //41

// const btn = document.querySelector('#btnp');
// const blocks = document.querySelectorAll('.aaa');

// btn.addEventListener('click', function () {
//    blocks.forEach((item) => {
//       item.classList.toggle('bbb');
//    });
// });

// const person = {
//    name: 'Саша',
//    greet: function () {
//       console.log(this.name);
//    },
// };

// const greetFn = person.greet.bind(person); // Прив'язуємо контекст до функції
// greetFn();

// for (let i = 0; i < 5; i++) {
//    setTimeout(() => console.log(i), 1000 * i);
// }

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

function createUser(name) {
   let loginCount = 0;

   return {
      getName() {
         return name;
      },
      login() {
         loginCount++;
         console.log(`${name} has logged in ${loginCount} times.`);
      },
   };
}

const user1 = createUser('Sasha');

user1.getName(); // "Sasha"
user1.login(); // Sasha has logged in 1 times.
user1.login();
user1.login();
user1.login();
user1.login();
user1.login();
user1.login();
