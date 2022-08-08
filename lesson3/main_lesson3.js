// ЛОГІЧНІ РОЗГЛАШУЖЕННЯ
// https://www.youtube.com/watch?v=JW_qEIOixVM&ab_channel=OktenSchool

// 0:33 - уявимо що у нас існує порносайт ( працюємо з prompt)
// 4:50 - if
// 10:02 - else
// 14:09 - else if
// 16:05 - switch,case,break,default
// 17:05 - коли юзати if, if else а коли юзати switch
// 19:54 - повертаємось до if
// 20:00 - діапазонні перевірки
// 21:37 - && логічний енд
// 22:40 - || оператор або
// 27:16 - confirm
// 30:50 - тернарний оператор
// 32:25 - Згадаємо конвертацію в булеві значення (null, undefined, 0, '', NuN)
// 39:15 - трішки про debugger

// () - це аргумент
// Все що запишемо в prompt буде стрінгою

// let a = prompt('Text') // так буде стрінга
// let b = +prompt('Text') // Так буде число

// if - звичайна булева перевірка
// let age = +prompt('what is your age?');
// if (age >= 18) {
//     document.write(`<h1>Заходь</h1>`);
// }

// if else - підходить щоб перевірити 2 дії

// let age = +prompt('what is your age?');
// if (age >= 18) {
//     document.write(`<h1>Заходь збоченець</h1>`);
// } else {
//     document.write(`<h1>Йди дивись мультики</h1>`);
// }

// ELSE IF МНОЖИННА ПЕРЕВІРКА

// let color = prompt('what you see?');
// if (color === 'green') {
//     console.log('you can go');
// } else  if (color === 'yellow') {
//     console.log('wait');
// } else if (color === 'red') {
//     console.log('STOP');
// } else {
//     console.log('better be careful');
// }

// SWITCH
// switch - він в середину приймає значення які буде порівнювати з певними випадками(case)
// break - оператор приривання

// let color = prompt('what do you see?');

// switch (color) {
//     case 'green':
//         console.log('go');
//         break;
//     case 'yellow':
//         console.log('wait');
//         break;
//     case 'red':
//         console.log('stop');
//         break;
//     default:
//         console.log('шо шо?');
// }

// ДІАПАЗОННІ ПЕРЕВІРКИ
// на відмінні від switch, в if else зручно робити діапазонні перевірки
// && - логічний end. Умова жорстка, всі вирази ліворуч і праворуч повинні дорівнювати true.
// || - логічне або. Йому всеодно якщо хоча б одна частина буде true, він одразу відразу буде сприймати позитивно

// let age = +prompt('age');

// <15 - telepuziki
// 15-18 - rick and morty
// >= 18 - adult

// if (age > 0 && age <15) {
//     console.log('telepuziky');
// } else if (age > 15 && age < 18) {
//     console.log('rick and morty');
// } else if (age >= 18) {
//     console.log('adult');
// } else {
//     console.log('Шось не так')
// }

// confirm - якщо натискаємо ok то певертає true, якщо cancel то false

// let b = confirm('do some');
//
// let x;
//
// if (b) {
//     x = 100;
// } else {
//     x = 200;
// }
//
// console.log(x);


// ТЕРНАРНИЙ ОПЕРАТОР

// let b = confirm('do some');
//
// let x = b ? 100 : 200; // каже шо x = b буде дорівнювати ато 100 або 200.
// // Можна прочитати це як: 'Чи дорівнює b значенню true', якщо та то x = 100, акщо ні x = 200
// console.log(x);

// Згадаємо конвертацію в булеві значення (null, undefined, 0, '', NuN)

// console.log(!!NaN); // falsy є ще trusly !! - це примусова конвертація в булеві значення

// if (NaN) {
//     console.log('+');
// } else {
//     console.log('-');
// }

// let user = {
//     name: 'vasya',
//     age: 31,
//     status: 'adsadasd'
// }
//
// console.log(user.status);
//
// if (user.status) {
//     if (user.age > 30) {
//         console.log('old');
//     }
// }

// реверсивний оператор !
// let name = prompt('enter you name');
// if (!name) {
//     name = 'joh doe';
// } console.log(name);

// let name = prompt('enter you name') || 'john';
// console.log(name);



//                          ДОМАШКА
// https://github.com/GrayHead/js_demos/blob/master/js/2022%20plan/lesson3/TASK/task.txt

// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
// що дорівнює 1, 0, -3

// let x = 0;
//
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число (в першу, другу, третю или четверту частину години).

// let time = 15;
//
// if (time >= 0 && time <= 14.75) {
//     console.log('Перша четверть');
// } else if (time >= 14.75 && time <= 29.5) {
//     console.log('Друга четверть');
// }  else if (time >= 29.5 && time <= 44.25) {
//     console.log('Третя четверть');
// } else if (time >= 44.25 && time <= 59) {
//     console.log('Четверта четверть')
// } else {
//     console.log('Ви ввели шось не то');
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

// let day = +prompt('type a day number');
//
// if (day >=1 && day <=10) {
//     alert('Перша декада');
// } else if (day >=11 && day <=20) {
//     alert('Друга декада');
// } else if (day >=21 && day <=31) {
//     alert('Третя декада');
// } else {
//     alert('Шось не так');
// }

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let dayOfWeek = prompt('Enter a number');

// switch (dayOfWeek) {
//     case '1':
//         console.log('Monday');
//         break;
//     case '2':
//         console.log('Thursday');
//         break;
//     case '3':
//         console.log('Wednesday');
//         break;
//     case '4':
//         console.log('Thursday');
//         break;
//     case '5':
//         console.log('Friday');
//         break;
//     case '6':
//         console.log('Saturday');
//         break;
//     case '7':
//         console.log('Sunday');
//         break;
//     default:
//         console.log('error, pls type a number')
// }

// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.

// let a = +prompt('Enter a first number');
// let b = +prompt('Enter a second number');
//
// if (a > b) {
//     console.log('First number bigger');
// } else if (b > a ) {
//     console.log('Second bigger');
// } else {
//     console.log('Error');
// }

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо
// значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x = NaN || 'default';
// console.log(x);














