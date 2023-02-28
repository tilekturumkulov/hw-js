// 1

// let name = 'Анастасия'
// console.log(name = "Максим")

// 2

// let str = 'Я хочу быть большим и сильным'
// console.log(str.length)

// 3

// let a = '15'
//     b = 15
//     c = 10
// console.log(a + b + c)
// console.log(b + c + a)

// 5

// let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]
// arr = arr.flat()

// for (let item of arr) {
//     if(item === 4) {
//         console.log(item)
//     }
// }

// 6

// let obj = {
//     name: 'Ivan',
//     age:35,
//     gender:'male',
//     job:'web-developer ',
// }

// for (let key in obj) {
//     console.log(`Значением свойства ${key} является ${obj[key]}`)
// }


// 7


// let surname = 'Cеребров'
// surname = surname.split('')
// surname.splice(-1, 1, 'ф', 'ф')
// surname = surname.join('')
// console.log(surname)

// 8

// let str = 'я люблю торт';

// if (str.includes('торт', str.length - 4)) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// 9

// let str = '10223040'
// str = [...str].reverse().join("")
// console.log(str)

// 10

// let age = 22
// console.log(`Мне ${age} лет!`)

// 11

// let str = ' asdasdsadsadsadsadc'
// str = str.split('')
// str.splice(0, 1)
// console.log(str)

// 12

// let arr = [2, 1, 3, 4, 5]

// arr.splice(3, 0, 'a', 'b', 'c')

// console.log(arr)

// 13

// let str = 'Мой город самый лучший город в России!'

// console.log(str.indexOf('город'));

// 14

// str = 'eloquent'

// function task14(str) {
//     str = str.split('')
//     str.splice(0, 1) && str.splice(-1, 1)
//     str = str.join('')
//     return str
// }

// console.log(task14(str));

// 15

// let a = prompt('Введите первое число', '')
// let b = prompt('Введите второе число', '')

// switch (true) {
//     case a > b:
//         alert(a * 1 + b * 1)
//         break
//     case a < b:
//         alert(a * 1 - b * 1)
//         break
//     case a === b:
//         alert('числа одинаковые')
//         break
//     default:
//         alert('Нет таких значений')

// }

// 16

// let arr = [12, '12', true, undefined, 'Ivan', 35]

// for (let item of arr) {
//     console.log(`Массив содержит в себе  элемент ${item}`)
// }