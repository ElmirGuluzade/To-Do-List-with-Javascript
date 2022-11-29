let btn = document.querySelector('#btn');
let menu = document.querySelector('.menu');
let ul = document.createElement('ul');
let input = document.getElementById('input');
let checkbox = document.createElement('input');
checkbox.setAttribute('type', 'checkbox');
let text = document.getElementById('input').value;
let x = document.createElement('i')

btn.addEventListener('click', function () {
    menu.classList.add("tasks")
    if (menu.style.display == 'none') {
        ul.innerHTML = ''
        menu.style.display = 'block'
    }
    let text = document.getElementById('input').value;
    if (text == '') {
        return;
    }
    let clear = document.getElementById('clear')
    clear.style.display = 'block'
    clear.addEventListener('click', function () {
        menu.style.display = 'none'
    })
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    let xMark = document.createElement('i')
    xMark.setAttribute('class', 'fa-solid fa-xmark')
    li.append(xMark)
    xMark.style.marginRight = '6px';
    xMark.style.display = 'inline-block';
    xMark.style.backgroundColor = 'red';
    xMark.style.color = 'white';
    xMark.style.padding = '1px 3px'
    xMark.style.fontSize = '16px'
    xMark.style.cursor = 'pointer'
    xMark.addEventListener('click', function () {
        ul.removeChild(li)
        if (ul.getElementsByTagName('li').length == 0) {
            menu.style.display = 'none'
        }
    })
    // checkbox begin
    li.append(checkbox)
    checkbox.style.marginRight = '4px'
    checkbox.style.marginTop = '5px'
    checkbox.style.fontSize = '12px'
    // checkbox finish
    // li style begin
    li.append(text)
    li.style.listStyleType = 'none'
    li.style.paddingBottom = '8px'
    li.style.paddingTop = '9px'
    li.style.fontSize = '18px'
    li.style.borderBottom = '1px solid #5FAAFF'
    // li style finish
    // done task begin
    checkbox.addEventListener('click', function () {
        if (checkbox.checked) {
            li.style.textDecoration = 'line-through';
            li.style.color = 'red';
            xMark.style.color = 'white'
        } else {
            li.style.textDecoration = 'none';
            li.style.color = 'black';
        }
    })
    // done task finish
    ul.appendChild(li);
    document.getElementById('input').value = '';
})

document.getElementById('menu').appendChild(ul);