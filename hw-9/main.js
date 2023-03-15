// 1

// const task1 = (arr) => {
//     return arr.map((item) => {
//         return item *= 2
//     })
// }

// console.log(task1([1, 2, 3]));

// 2

// const task2 = arr => arr.filter((item, idx) => {
//     return idx % 2 === 0
// })

// console.log(task2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 3

// const task2 = arr => arr.map(item => item === 0 ? item : item * -1)

// console.log(task2([-1, 2, -3, 0, 4, -5, ]));

// 4

// const task4 = (arr, num) => {
//     return arr.filter((item, idx) => {
//         return idx < num
//     })
// }

// console.log(task4([0, 1, 2, 3, 5, 8, 13], 5));

// 5

// const task5 = (arr) => {
//     return arr.filter((item, idx) => {
//         return item % idx === 0
//     })
// }

// console.log(task5([22, -6, 32, 82, 9, 25]));

// 6

// const task6 = arr => arr.map((item) => {
//     return typeof item === 'string' ? item = null : item
// })

// console.log(task6([4, 6, 'Ivan', 5, 'Denis ']));

// 7

// const task7 = arr => arr.filter((item) => {
//     return item.length <= 5
// })

// console.log(task7(['Евдоким', 'Ivan', 'Игнат', 'Denis']));

// 8

const task8 = (arr) => {
    return arr.map((item) => item ** 3).map((item) => {
        if (item % 3 === 0 && item % 5 === 0) {
            item = 0
        }
        return item
    })
}

console.log(task8([7, 8, 15, 30, 2]));

// 9 

// const task9 = arr => arr.map((item) => {
//     return item.length
// })

// console.log(task9(['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень']));

// 10

// const task10 = arr => arr.map((item) => {
//     return `<div> ${item} </div>`
// })

// console.log(task10([1, 2, 3, 4, 5]));

// 11

// const task11 = arr => arr.filter((item) => {
//     return item.length % 2 === 0
// })

// console.log(task11(['ab', 'abc', 'abcd']));