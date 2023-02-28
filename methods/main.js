// push

// let arr = [1, 2, 3, 4, 5]

// function taskPush(a) {
//     arr = [...arr, a]
//     return arr
// }


// console.log(taskPush(6))

// pop

// let arr = [1, 2, 3, 4, 5]

// function taskPop(a) {
//     arr.splice(-1, 1)
//     return arr
// }

// console.log(taskPop())

// unshift

// let arr = [1, 2, 3, 4, 5]

// function taskUnshift(a) {
//     arr = [a, ...arr]
//     return arr
// }

// console.log(taskUnshift(0))

// shift

// let arr = [1, 2, 3, 4, 5]

// function taskShift(a) {
//     arr.splice(0, 1)
//     return arr
// }

// console.log(taskShift())

// splice ///////////////////////////////////////////////////////////////////////////

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function taskSplice(a, b, c) {
//     for (let i = a; i < b + a; i++) {
//         arr[i] = c
//         return arr
//     }
// }

// console.log(taskSplice(4, 2, 3));

// slise ///////////////////////////////////////////////////////////////////////////



// concat ///////////////////////////////////////////////////////////////////////////

// let arr = [1, 2]

// function taskConcat(a) {
//     a = a.join(', ')
//         // for (let i = 0; i < arr.length; i++) { 
//         //     arr[i] = Number(arr[i])
//         // }
//     arr = [...arr, a]
//     return arr
// }

// console.log(taskConcat([3, 4]));



// indexOf

// let arr = [1, 2, 3, 4, 5, true, null, 13]
// index = 0

// function taskIndexOf(a) {
//     for (let i = 0; i < arr.length; i++) {
//         index++
//         if (a === arr[i]) {
//             return index - 1;
//         }
//     }
// }

// console.log(taskIndexOf(1));


// lastIndexOf 

// let arr = [1, 2, 3, 4, 5, true, null, 13, 1, 5, 6, 5, 1]
// index = 0

// function taskLastIndexOf(a) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         index++
//         if (a === arr[i]) {
//             return arr.length - index;
//         }
//     }
// }

// console.log(taskLastIndexOf(5));

// includes

let arr = [1, 2, 3, 4, 5, 6]

function taskInclude(a) {
    for (let i = 0; i < arr.length; i++) {
        if (a % 2 === 0) {
            return 'Четный'
        }
        return 'Не четный'
    }
}

console.log(taskInclude(4))

// sort