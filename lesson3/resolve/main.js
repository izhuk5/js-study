// https://www.youtube.com/watch?v=JW_qEIOixVM
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

















