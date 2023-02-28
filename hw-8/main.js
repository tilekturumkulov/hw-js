// 1

// function task1(val) {
//     let tval = typeof(val)
//     return `Тип элемента ${val} ${tval}`
// }

// console.log(task1({}))

// 2

// function task2 (a) {
//     return a = a*a
// }

// console.log(task2(6))

// 3

// function task3(str1, str2, str3) {
//     let arr = []
//     for (let i = 0; i < str1.length || i < str2.length || i < str3.length; i++) {
//         arr = [...arr, str1[i], str2[i], str3[i]]
//     }
//     return arr.join('')
// }

// console.log(task3('Bm', 'aa', 'tn'))

// 4

// function task4(a) {
//     let b = a.split(' ')
//     return `${b[0][0]}, ${b[1][0]}`
// }

// console.log(task4('Sergey Semenov'))

// 5

// function task5(name, city, region) {
//     for (let i = 0; i < name.length; i++) {
//         return `Привет, ${name[i]} ${name[i+1]} ! Добро пожаловать в ${city}, ${region}!`
//     }
// }


// console.log(task5(['Дмитрий', 'Серебров'], 'Ишим', 'Тюменская обл'))

// 6

// function task6(a) {
//     if (a < 0) {
//         return 'Negative'
//     } else if (a > 0) {
//         return 'Positive'
//     } else if (a === 0) {
//         return 'Zero'
//     }
// }

// console.log(task6(0));

// 7

// function task7(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str === str.toUpperCase()) {
//             return str.toLowerCase()
//         } else if (str === str.toLowerCase()) {
//             return str.toUpperCase()
//         }
//     }
// }

// console.log(task7('hello world'))

// 8

// function task8(obj) {
//     return obj.id
// }

// console.log(task8({ id: 10 }))

// 9

// function task9(obj) {
//     if (obj.name.length % 2 === 0) {
//         return 0
//     } else if (obj.name.length % 2 === 1) {
//         return 1
//     }
// }

// console.log(task9({ name: 'Tilek' }))

// 10

// function task10(a, b) {
//     if (a > b) {
//         return 1
//     } else if (a < b) {
//         return -1
//     } else if (a === b) {
//         return 0
//     }
// }

// console.log(task10(5, 7))

// 11

// function task11(num) {
//     if (num % 3 == 0 && num % 5 == 0) {
//         return 'MasterYoda'
//     } else if (num % 5 === 0) {
//         return 'Yoda'
//     } else if (num % 3 === 0) {
//         return 'Master'
//     } else if (num % 3 !== 0 && num % 5 !== 0) {
//         return num
//     }
// }

// console.log(task11(16))