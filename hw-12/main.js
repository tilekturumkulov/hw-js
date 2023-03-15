let idElememt = document.querySelector('#title')

console.log(idElememt);

let text = Array.from(document.querySelectorAll('.text'))

console.log(text);

let item = Array.from(document.querySelectorAll('li.list-item'))

console.log(item);

let elem = document.querySelectorAll('li')

Array.from(elem).forEach((item, idx) => {
    item.textContent = `${item.textContent} элемент № ${idx}`
    if (idx < 2) {
        item.style.color = 'red'
        item.style.fontSize = '28px'
        item.style.textDecoration = 'underline'
        item.style.background = 'green'
    } else {
        item.style.color = 'blue'
    }
})


let info = document.querySelectorAll('.info')

Array.from(info).forEach((item, idx) => {
    item.textContent = `${item.textContent} элемент № ${idx}`
    if (idx % 2 === 0) {
        item.style.color = 'red'
    } else {
        item.style.color = 'green'
    }
})