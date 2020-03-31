function toHtml(el) {
    return `
        <a href="#">${el}</a><br>
    `
}

let arr = []
function myFunc() {
    let here = document.querySelector('#here')
    for (let i = 0; i <= 10; i++) {
        arr.push(i)
    }
    let b = arr.map(el => toHtml(el)).join(' ')
    return here.innerHTML = b

}
myFunc()