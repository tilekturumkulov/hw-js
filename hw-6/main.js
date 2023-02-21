// 1

// let arr = [1, 2, 3, 4, 5]

// for ( let i = 0; i < arr.length; i++ ) {
//     console.log(arr[i])
// }

// 2

// let arr = [1, 2, 3, 4, 5]

// let result = 0

// for ( let i = 0; i < arr.length; i++ ) {
//     result = result + arr[i]   
// }

// console.log(result)

// 3

// for (let i = 0; i < 3; i++) {
//     console.log(`number ${i}`)
// }

// let i = 0

// while (i < 3) {
//     console.log(`number ${i}`)
//     i++
// }

// 4

// let arr = [-2,7,9,5,8,1,12,15,17,3]
// let newArr = []

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] < 10) {
//         newArr = [...newArr, arr[i]]
//     }
// }

// console.log(newArr)

// 5

// for (let i = 1; i < 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// 6

// let result = 1

// for (let i = 1; i <= 100; i ++) {
//     result = result + i
// }

// console.log(result)

// 7

// let arr = ['BMW', 'Mersedes', 'Opel', 'Mazda', 'FIAT', 'Ferarri', 'Reno']
//     newArr = []

// for (let i = 0; i <= arr.length; i++) {
//     if ( arr[i] == arr[0].toUpperCase()){
//         newArr = [...newArr, arr[i]]
//     } else if ( arr[i] == arr[1].toUpperCase()){
//         newArr = [...newArr, arr[i]]
//     } else if ( arr[i] == arr[2].toUpperCase()){
//         newArr = [...newArr, arr[i]]
//     } else if ( arr[i] == arr[3].toUpperCase()){
//         newArr = [...newArr, arr[i]]
//     } else if ( arr[i] == arr[4].toUpperCase()){
//         newArr = [...newArr, arr[i]]
//     } else if ( arr[i] == arr[5].toUpperCase()){
//         newArr = [...newArr, arr[i]]
//     } else if ( arr[i] == arr[6].toUpperCase()){
//         newArr = [...newArr, arr[i]]
//     } 
// }
// console.log(newArr)





// 8

// let arr = [2,3,4,5,6,7]
// let newArr = []

// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] < 5 || arr[i] > 5) {
//         arr[i] = arr[i] * 2
//     }
//     newArr = [...newArr, arr[i]] 
//     if(newArr[i] % 2 === 0) {
//         console.log(newArr[i])
//     }
// }


// 9

// let arr = [-2, 7, '9б', 'Vlad', 1, 12, 15, 'Ivan', 17, 3]

// for (let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'string') {
//         console.log(arr[i])
//     }
// }


// 10 

// let arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']

// for (let i = 0; i <= arr.length-1; i++) {
//     if(arr[i] === 'суббота' || arr[i] === 'воскресенье'){
//         arr[i] = 'выходной'
//     }
//     console.log(arr[i])
// }

// 11

// let arr = ['Наташа','Анастасия','Дмитрий','Максим'] 

// for (let i = 0; i <= arr.length-1; i++){
//     if(arr[i] === 'Наташа'){
//         continue
//     }
//     console.log(arr[i])
// }

// 12

// let arr = ['Наташа', 'Анастасия', 2, 'Максим', 4]

// for (let i = 0; i <= arr.length-1; i++) {
//     if(typeof arr[i] === 'number') {
//         console.log(arr[i])
//     }
// }

// for (let j = 0; j <= arr.length-1; j++) {
//     if(typeof arr[j] === 'string') {
//         console.log(arr[j])
//     }
// }

// 13

// for (let i = 2; i <= 10; i++) {
//     console.log(` ${5} * ${i} = ${5*i}`)
// }
