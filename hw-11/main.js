// const task1 = (arr1, arr2) => {
//     return arr1.reduce((acc, rec, idx) => {
//         return [...acc, rec + arr2[idx]]
//     }, [])
// }


// console.log(task1([2, 4], [1, 3]));

// const task2 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, rec * 2]
//     }, [])
// }

// console.log(task2([1, 2, 3, 4, 5]));

// const task3 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, rec.id]
//     }, [])
// }

// console.log(task3([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]));

// const task4 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, `<div> ${rec} </div>`]
//     }, [])
// }

// console.log(task4([1, 2]));

// const task5 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (rec.length % 2 === 0) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }

// console.log(task5(['ab', 'abc', 'abcd']));

// const task6 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (rec * 2 % 10 === 0) {
//             return [...acc, rec * 2]
//         }
//         return acc
//     }, [])
// }

// console.log(task6([1, 2, 3, 7, 10, 5]));

// const task7 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (rec === true) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }

// console.log(task7([true, false, true, true]));

// const task8 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (rec !== undefined) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }

// console.log(task8([true, false, true, true, undefined, true, undefined]));

// const task9 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return acc + rec
//     }, 0)
// }

// console.log(task9([1, 2, 3, 4, 5]));

// const task10 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return acc && rec
//     }, [])
// }

// console.log(task10([true, true, true, true]));

// const task11 = (arr) => {
//     return arr.reduce((acc, rec, idx) => {
//         return acc = {...acc, ['field ' + idx]: rec }
//     }, {})
// }

// console.log(task11([true, 1, 'wow', 'you are smart, bro']));

// const task12 = (obj) => {
//     return Object.keys(obj).reduce((acc, rec) => {
//         if (typeof obj[rec] === 'string') {
//             return {...acc, [rec]: obj[rec] }
//         }
//         return acc
//     }, [])
// }

// console.log(task12({ name: 'pilot', isActive: true }));

// const task13 = (obj) => {
//     return Object.keys(obj).reduce((acc, rec) => {
//         if (obj[rec] === false) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }

// console.log(task13({ isActive: false, isPilot: true }));

// const task14 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return acc + rec
//     }, 0) / arr.length
// }

// console.log(task14([1, 2, 3, 4, 40]));

const task15 = (arr, num) => {
    let num2 = 0
    return arr.reduce((acc, rec) => {
        acc = arr[0](num)
        return num2 = arr[1](acc)
    }, 0)
}

console.log(task15([
    (a) => a + 1,
    (a) => a * 2
], 5));