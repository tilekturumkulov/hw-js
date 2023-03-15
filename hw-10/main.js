// 1

// const task1 = (arr, arr2) => {
//     return arr.map((item, idx) => {
//         return item + arr2[idx]
//     })
// }

// console.log(task1([2, 4], [1, 3]));

// 2

// const task2 = (arr) => {
//     return arr.map((item) => {
//         return item * 2
//     })
// }

// console.log(task2([1, 2, 3, 4, 5]));

// 3

// const task3 = (arr) => {
//     return arr.map((item) => {
//         return item.id
//     })
// }

// console.log(task3([{ id: '100' }, { id: 2 }]));

// 4

// const task4 = (arr) => {
//     return arr.map((item) => {
//         return `<div> ${item} </div>`
//     })
// }

// console.log(task4([1, 2]));

// 5

// const task5 = (arr) => {
//     return arr.filter((item) => {
//         return item.length % 2 === 0
//     })
// }

// console.log(task5(['ab', 'abc', 'abcd']));

// 6

// const task6 = (arr) => {
//     return arr.map((item) => {
//         return item * 2
//     }).filter((i) => {
//         return i % 10 === 0
//     })
// }

// console.log(task6([1, 2, 3, 7, 10, 5]));

// 7

// const task7 = (arr) => {
//     return arr.filter((item) => {
//         return item == true
//     })
// }

// console.log(task7([true, false, true, true]));

// 8

// const task8 = (arr) => {
//     return arr.filter((item) => {
//         return item !== undefined
//     })
// }

// console.log(task8([true, false, true, true, undefined, true, undefined]));

// 9

// const task9 = (arr) => {
//     return arr.reduce((a, b) => {
//         return a + b
//     })
// }

// console.log(task9([1, 2, 3, 4, 5]));

// 10

// const task10 = (arr) => {
//     return arr.reduce((a, b) => {
//         return a && b
//     })
// }

// console.log(task10([true, true, true, true, false]));

// 11

// const task11 = (arr) => {
//     let obj = {}
//     arr.forEach((item, idx) => {
//         obj = {...obj, ['field ' + idx]: item }
//     });
//     return obj
// }

// console.log(task11([true, 1, 'wow', 'you are smart, bro']));

// 12  

// const task12 = (obj) => {
//     return Object.keys(obj).reduce((acc, rec) => {
//         if (typeof obj[rec] === 'string') {
//             return {...acc, [rec]: obj[rec] }
//         }
//         return acc
//     }, {})
// }

// console.log(task12({ name: 'pilot', isActive: true }));

// 13

// const task13 = (obj) => {
//     return Object.keys(obj).reduce((acc, rec) => {
//         if (!obj[rec]) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }

// console.log(task13({ isActive: false, isPilot: true }));


// 14

// const task14 = (arr) => {
//     return arr.reduce((a, b) => {
//         return a + b
//     }) / arr.length
// }

// console.log(task14([4, 6, 10, 9, 1]));

// 15

// const task15 = (a, b, c) => {

// }

// console.log((a) => a + 2, (a) => a * 5, (a) => a - 5), 3;