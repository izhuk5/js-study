// LOOPS ЦИКЛИ
// https://www.youtube.com/watch?v=e_acjd1z3iE&ab_channel=OktenSchool
// 6:21 - цикл for of
// 8:36 - трішки про debugger
// 34:11 - класичний цикл for
// 48:30 - зворотній цикл
// 53:45 - цикл while
// 59:33 - do while
// 1:03:34 - цикл for in
// https://www.youtube.com/watch?v=e_acjd1z3iE&ab_channel=OktenSchool

// Цикл дозволяє нам виконувати щось н-ксть разів послідовно. Брати масив і перебирати його.
// for of - ітирує від початку до кінця

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true},
// ];
//
// for (let user of users) { // user - це в нас перший обьєкт Вася
//     console.log(user);
// }

// FOR OF
// debugger;
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true},
// ];
//
// for (const user of users) {
//     if (user.status === true)  { // Фільтрація відбувається за допомогою if
//         console.log(user);
//     }
// }

// ПРОІТЕРУЄМО 4 продукти
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (const product of products) {
//     document.write(`
//         <div>
//             <h2>${product.title} ${product.price}</h2>
//             <img src="${product.image}" alt="#">
//         </div>
//     `);
// }

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
//     {
//         title: 'cola',
//         price: 12,
//         image: 'https://img.fozzyshop.com.ua/39582-thickbox_default/napitok-coca-cola-05l.jpg'
//     },
// ];

// for (const product of products) {
//     if (product.price >25 ) {
//         document.write(`
//         <div>
//             <h2>${product.title} ${product.price}</h2>
//             <img src="${product.image}">
//         </div>
//         `);
//     }
// }

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
//     {
//         title: 'cola',
//         price: 26,
//         image: 'https://img.fozzyshop.com.ua/39582-thickbox_default/napitok-coca-cola-05l.jpg'
//     },
// ];
//
// for (const product of products) { // В майбутньому таку реакцію ми будемо ставити реакцію на кнопку
//     if (product.price > 25) {
//         document.write(`
//                 <div>
//                     <h2>${product.title} ${product.price}</h2>
//                     <img src="${product.image}" alt="#">
//                 </div>
//         `);
//     }
// }

// ДІАПАЗОНИ for () - в ньому ми оголошуємо змінну (якийсь певний індекс)
// В якийсь момент я хочу вивести якийсь сегмент обьєктів ( наприклад з 2-8)
// for of - ітерує від початку до кінця

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true},
// ];

// КЛАСИЧНИЙ ЦИКЛ FOR

// for (let i = 2; i < 8; i = i + 1) {
//     let user = users[i];
//     if (user.status === true) {
//         console.log(user);
//     }
// }

// Чи можна за допомогою класичного for зробити все те саме що ми робили за допомогою for of (тобто пройтись
// з початку до кінця

// for (let i = 0; i < 11; i++) {
//     let user = users[i];
//     console.log(user);
// }

// А якщо ми додамо обєкт в масив то ми зробимо ось так
// itar - формує змінну

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     console.log(user);
// }

// ЗВОРОТНІЙ ЦИКЛ - той самий цикл який просто починається з кінця
// останній індекс це довжина -1
// ritar - reverse iteration

// for (let i = users.length - 1; i >= 0; i--) {
//     let user = users[i];
//     console.log(user);
// }

// WHILE - рівно все те саме що було до цього моменту, просто змінна оголошується зовні
// і вона буде глобально видимою в певних межах, тому що вона не в межах якогось
// блоку ініціалізації за допомогою while можна ітерувати бескінечні колекції

// let i = 0;
// while (i < users.length) {
//     console.log(users[i]);
//     i++;
// }

// let i = 0;
//
// do {
//     console.log(users[i]);
//     i++;
// } while (i < users.length)


// let x = 0;
// x = x + 3; // збільшення на 1 - increment by 3 . Можна поставити і множити і поділити і тип того
// console.log(x);
// x = x + 10;
// console.log(x);
// x += 20; // до x додаємо 20 і пересвоємо його
// console.log(x); // 33
// x++;
// console.log(x); // 34
// x--;
// console.log(x); // 33


// ТО ВСЕ БУЛИ БАЗОВІ ЦИКЛИ

// А ТЕПЕР НЕ БАЗОВІ ЦИКЛИ

// 1:00
// FOR IN  - for iterate obj
// До цього моменту ми ітерували масиви а теперь обьєкт
// itin -
// тільки цикл for in можна іти по обєкту і перебирати його характеристики

// let obj = {name: 'olya', age: 31, status: false};
// for (const key in obj) {
//     console.log(key, obj[key]);
// }

// Чи можемо ми проітерувати цей масив юзерів і проетирювати кожного юзера окремо? Так!

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true},
// ];
//
// for (const user of users) {
//
//     for (const key in user ) {
//         console.log(key, user[key]);
//     }
//     console.log('************');
// }



// Ітерація - це одне коло циклу. Іттерувати масив це означає перебирати його послідовно.
// ${} - інтерполяція (треба знати що йде нагрузка сильніша) А де дивитись нагрузки?
// shortcut ITER - буде звертатись до останього масива якого інтелідж побачить



