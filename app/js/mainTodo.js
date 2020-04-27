const refresh = document.getElementById('refresh');
const trash = document.getElementsByClassName('trash');
const addToDo = document.getElementById('addToDo');
const input = document.getElementById('input');
const content_ul = document.getElementById('content_ul');
const LINE_THROUGHT = 'line_throught';
let CHECK = 'fa-check-circle';
let UNCHECK = 'fa-circle';

let LIST, id;

let data = localStorage.getItem('list');
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST)
} else {
    LIST = [];
    id = 0

}

function loadList(array) {
    array.forEach(renderTodo);
};

const addTodo = () => {
    if (input.value) {
        const newTodo = {
            title: input.value,
            id: id,
            done: false
        };
        renderTodo(newTodo);

        LIST.push(newTodo);
        localStorage.setItem('list', JSON.stringify(LIST));
        id++
        input.value = '';

        const elements = document.querySelectorAll('.content_li');
        elements[elements.length - 1].animate([
            { opacity: '0.2' },
            { opacity: '1.0' }
        ],
            {
                duration: 1000,
                fill: 'forwards'
            }
        )

    }
}

function clicker(el) {

    // console.log(el.children);
    el.children[0].disabled = false;
    let index = +el.children[0].id;
    const onKeyUp = (event) => {
        if (event.keyCode === 13) {
            el.children[0].disabled = true;
            let obj = LIST.find((element) => element.id === index);
            obj.title = el.children[0].value;
            localStorage.setItem('list', JSON.stringify(LIST));
        }
    }
    el.children[0].addEventListener('keyup', onKeyUp);

}

const onKeyUp = (event) => {

    if (event.keyCode === 13) {

        addTodo();

    }

}
input.addEventListener('keyup', onKeyUp);

function toggleTodo(el, id) {
    el.classList.toggle(CHECK);
    el.classList.toggle(UNCHECK);
    el.nextElementSibling.children[0].classList.toggle(LINE_THROUGHT);
    LIST = LIST.map(elem => {
        if (elem.id === id) {
            elem.done = !elem.done;
        }
        return elem;
    })
    // console.log(LIST);
    localStorage.setItem('list', JSON.stringify(LIST));
}

function remove(el, id) {
    const parent = el.parentElement;
    parent.animate([
        { opacity: '1.0' },
        { opacity: '0' }
    ],
        {
            duration: 500,
            fill: 'forwards'
        }
    )
    setTimeout(function () {
        parent.remove();
        localStorage.setItem('list', JSON.stringify(LIST));
    }, 500);

    for (let i = 0; i < LIST.length; i++) {
        if (LIST[i].id === id) {
            LIST.splice(i, 1);
            break;
        }
    }
};

function showByChecked(bool) {
    content_ul.innerHTML = '';

    let newlist = LIST.filter(el => el.done === bool);

    for (let i = 0; i < newlist.length; i++) {
        let item = newlist[i];
        renderTodo(item);
        let elements = document.querySelectorAll('.content_li');
        elements[elements.length - 1].animate([
            { opacity: '0' },
            { opacity: '1.0' }
        ],
            {
                duration: 500,
                fill: 'forwards'
            }
        )
    };
};

function showAll() {
    // console.log(LIST);
    content_ul.innerHTML = '';

    LIST.forEach(renderTodo);
};

refresh.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

function getTodoElem(item) {
    const ch = item.done ? CHECK : UNCHECK;
    return `
        <li id='${item.id}' class='content_li'>
        <i onclick="toggleTodo(this, ${item.id})" class="far ${ch}"></i>
            <div class='clicker' ondblclick = 'clicker(this)'> 
                <input id='${item.id}'  class=" text_p ${item.done ? LINE_THROUGHT : ''}" disabled='disabled' value ='${item.title}' ></input>
            </div>
        <i class="fas fa-trash" onclick='remove(this, ${item.id})'></i>
        </li>
    `;
};

function renderTodo(item) {
    const position = 'beforeend';
    const text = getTodoElem(item);
    content_ul.insertAdjacentHTML(position, text);
};