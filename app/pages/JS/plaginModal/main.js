const person = [{
    name: 'Max',
    age: 35,
    address: {
        country: 'UK',
        city: 'Kyiv'
    }
},
{
    name: 'Арчи',
    age: 33,
    address: {
        country: 'украина',
        city: 'хмельницкий'
    },
    phone: '0677832252'
}
    ,
{
    name: 'марина',
    age: 23,
    address: {
        country: 'украина',
        city: 'хмкльницкий'
    },
    phone:''
}
    ,
{
    name: 'vova',
    age: 345,
    address: {
        country: 'RU',
        city: 'Moscow'
    },
}
    ,
{
    name: 'vova',
    age: 345,
    address: {
        country: 'RU',
        city: 'Moscow'
    },
}
    ,
{
    name: 'vova',
    age: 345,
    address: {
        country: 'RU',
        city: 'Moscow'
    },
}
]



let id = 22
const toHTML = ({ name, age, phone, address: { country, city } }) => {
    const countId = () => id += 1
    return `
                <div>
                    <h4> Мое имя ${name}</h4>
                    <img src='https://picsum.photos/id/${countId()}/100/100' />
                    <p>Мне ${age} лет</p>
                    <p>Я проживаю в ${country} в городе ${city}</p>
                     ${phone ? `<p>Контактный номер ${phone}</p>` : `<p>Номер не указан</p>`}   
                    <button id=${countId() - 1} onclick="showModal(event)" >Смотреть фото</button>
                </div>
                <hr/>
            `
}
function renderPerson() {
    const html = person.map(el => toHTML(el)).join(' ')
    document.querySelector('#div').innerHTML = html
}
renderPerson()




function showModal(event) {
    const id = +event.target.id
    console.log(id);

    modal.setContent(`<img class='img' src='https://picsum.photos/id/${id}/600' />`)
    modal.open(id)
}

// modal=====================================
const $ = {}

function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('rmodal')
    modal.insertAdjacentHTML("afterbegin", `
                <div class="leyout" data-close='true'>
                    <div class="content">
                        <div data-content>
                       
                        </div>
                    </div>
                </div>
            
    `)
    document.body.append(modal)
    return modal
}

$.modal = function (options) {
    const $modal = _createModal(options)
    let closing = false

    const modal = {
        open() {
            !closing && $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, 200)
        }
    }
    const listener = (event) => {
        if (event.target.dataset.close) {
            modal.close()
        }
    }
    $modal.addEventListener('click', listener)

    // return modal
    return Object.assign(modal, {
        setContent(html){
            $modal.querySelector('[data-content]').innerHTML = html
        }
       
    }) 
}

const modal = $.modal()
