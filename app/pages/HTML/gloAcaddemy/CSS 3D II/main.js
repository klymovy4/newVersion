const cards = document.querySelector('.card-item')
const open = document.querySelector('#open')

function startRotate(event) {
    const cardItem = document.querySelector('.card-item')
    const halfHeight = cardItem.offsetHeight / 2
    const halfWeight = cardItem.offsetWidth / 2

    cardItem.style.transform = 'rotateX(' + -
        (event.offsetY - halfHeight) / 5 + 'deg) rotateY(' +
        (event.offsetX - halfWeight) / 5 + 'deg)'
}

function stopRotate() {
    const cardItem = document.querySelector('.card-item')
    cardItem.style.transform = 'rotate(0)'
}

function myFunc(e) {
    e.preventDefault()

    const menuNav = document.querySelector('.menu-nav')
    menuNav.classList.toggle('menu-nav_active')
    this.classList.toggle('menu-btn-active')
    document.querySelector('.menu_block_a').classList.toggle('menu_active_a');

}

function toHTML(el) {
    return `
            <a class='years_class' href="#">${el}</a>
            `
}
function showYears() {
    let date = new Date()
    let dateBirth = 1986
    let arr = []

    for (let i = dateBirth; i <= date.getFullYear(); i++) {
        let newDate = dateBirth++
        arr.push(newDate)

        document.querySelector('#years').innerHTML = toHTML(arr)
    }
    let result = arr.map(toHTML).join(' ')
    document.querySelector('#years').innerHTML = result
}

function openSelfMenu() {
    const selfHiden = document.querySelector('.self-hiden')
    const selfNavMenu = document.querySelector('.self_menu_nav')
    this.classList.toggle('self_menu_btn_active')
    selfHiden.classList.toggle('self_hiden_active')
    selfNavMenu.classList.toggle('self_menu_nav_active')
}

cards.addEventListener('mousemove', startRotate);
cards.addEventListener('mouseout', stopRotate);
document.querySelector('.menu-btn').addEventListener('click', myFunc);
open.addEventListener('click', openSelfMenu);

showYears()