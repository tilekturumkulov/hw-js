// 1

// let a = 'test'

// if (a === 'tesnt') {
//     console.log('Verno')
// } else {
//     console.log('Neverno')
// }

// 2

// let number
//     data = false;

// data === true ? number = 2 : number = 3;

// console.log(number)

// 3

// let time = prompt("Когда вы собираетесь прийти в магазин?" , [])

// switch (time) {
//     case '23':
//     case '0':
//     case '1':
//     case '2':
//     case '3':
//     case '4':
//     case '5':
//     case '6':
//     case '7':
//     case '8':
//       alert( 'В это время мы не работаем' );
//     break
//     case '9':
//     case '10':
//     case '11':
//     case '13':
//     case '14':
//     case '15':
//     case '16':
//     case '17':
//     case '18':
//     case '19':
//     case '20':
//     case '21':
//     case '22':
//       alert( 'Будем рады Вас видеть!' );
//     break
//     case '12':
//       alert( 'У нвс обед' );
//     break
//     default:
//       alert( "Нет таких значений" );
// }

// time >= 9 & time < 12 ? alert( 'Будем рады Вас видеть!' ): time >= 13 & time < 23 ? alert( 'Будем рады Вас видеть!' ): time >= 23 & time < 24 ? alert( 'В это время мы не работаем' ): time >= 0 & time < 9 ? alert( 'В это время мы не работаем' ): time > 11.9 & time < 13 ? alert( 'У нвс обед' ) : alert( "Нет таких значений" );

// 4

// let m = 50;
// let n;

// if (m > 50) {
//     n = "Большое"
// } else {
//     n = "Маленькое"
// }

// console.log(n)

// 5

// let a = 0

// if (a === 2) {
//  a = a + 2
//  console.log(a)
// } else if ( a === 0) {
//     a = a + 2
//     console.log(a)
// } else {
//     a = a / 10
//     console.log(a)
// }

// 6

// let age = confirm('Вам есть 18?')

// switch (age) {
//     case true:
//       alert( 'Есть' );
//     break
//     case false:
//       alert( 'Нет' );
//     break
//     default:
//       alert( "Нет таких значений" );
// }

// 7

// let a = 3
//     b = 5

// if (a <= 1 & b >= 3) {
//     console.log(a + b)
// } else {
//     console.log(a - b)
// }

// 8

// let age = 0

// if ( age > 0 & age <= 17) {
//     console.log('Паша еще ребенок!')
// } else if (age >= 18) {
//     console.log('Паша стал взрослым!')
// } else {
//     console.log('Нет таких значений')
// }

// 9

// let seasons = prompt('Введите месяц', [])

// switch (seasons.toLowerCase()) {
//     case 'декабрь':
//         case 'январь':
//             case 'февраль':
//         alert( 'Зима' );
//     break
//     case 'март':
//         case 'апрель':
//             case 'май':
//         alert( 'Весна' );
//     break
//     case 'июнь':
//         case 'июнь':
//             case 'июнь':
//         alert( 'Лето' );
//     break
//     case 'сентябрь':
//         case 'октябрь':
//             case 'ноябрь':
//         alert( 'Осень' );
//     break
//     default:
//       alert( "Нет таких значений" );
// }

// 10

// let time = prompt('Введите любое число', [])

// time >= 0 & time <= 15 ? console.log('время относится к четверти часа') : time > 15 & time <= 30 ? console.log('время относится к половине часа') : time > 30 & time <= 45 ? console.log('время относится к 3/4 часа') : time > 45 & time <= 60 ? console.log('время относится к целому часу') : console.log("неизвестный диапазон"); 