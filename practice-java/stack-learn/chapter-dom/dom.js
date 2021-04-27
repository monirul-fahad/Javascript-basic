// selector 

// let title = document.getElementById('title')
// console.log(title)

// let paragraphs = document.getElementsByClassName('lead')
// console.log(paragraphs)

// let lists = document.getElementsByTagName('li')
// console.log(lists)

// let firstList = document.getElementsByName('list-item-one')
// console.log(firstList)

// query selector 

// var title = document.querySelector('#title')
// console.log(title)

// var paragraphs = document.querySelectorAll('.lead')
// console.log(paragraphs)

// var list = document.querySelectorAll('li')
// console.log(list)

// var firstList = document.querySelector('[name = "list-item-one"]')
// console.log(firstList)



//   create DOM element 

// let li = createElement('li', 'list-group-iteam', 'Four')
// li.setAttribute('title', 'I am Fourth item')

// let list = document.getElementById('list')
// list.appendChild(li)


let p1 = createElement('p', 'lead', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vero iste illum laborum saepe animi aut ratione quas minus adipisci nesciunt voluptatem aperiam beatae ad, nostrum pariatur labore facilis maiores, autem ipsa laboriosam. Error ab doloremque ex rem, impedit quasi, ducimus rerum quod, assumenda accusamus repudiandae veniam quisquam sapiente quidem eligendi! Minima perferendis esse ullam at obcaecati iste atque eligendi, in inventore saepe dolore incidunt illo quaerat? Ipsa nulla ex libero non vero amet esse pariatur, commodi molestias rem enim laborum officia ipsum ut iure impedit quia repellendus fugiat voluptatem! Voluptatem nemo incidunt quos natus inventore placeat illo delectus ducimus.')

let p2 = createElement('p', 'lead', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vero iste illum laborum saepe animi aut ratione quas minus adipisci nesciunt voluptatem aperiam beatae ad, nostrum pariatur labore facilis maiores, autem ipsa laboriosam. Error ab doloremque ex rem, impedit quasi, ducimus rerum quod, assumenda accusamus repudiandae veniam quisquam sapiente quidem eligendi! Minima perferendis esse ullam at obcaecati iste atque eligendi, in inventore saepe dolore incidunt illo quaerat? Ipsa nulla ex libero non vero amet esse pariatur, commodi molestias rem enim laborum officia ipsum ut iure impedit quia repellendus fugiat voluptatem! Voluptatem nemo incidunt quos natus inventore placeat illo delectus ducimus.')

let div = createElement('div')
append(div,[p1, p2])

// list.insertAdjacentElement('beforebegin', div)

// let container = document.getElementById('cont')
// container.appendChild(div)

function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName)
    tag.innerHTML = innerHTML || ''
    tag.className = className || ''

    return tag

}

function append(parent, children) {
    children.forEach(child => parent.appendChild(child))
}



// remove or update element 

// let firstChild = list.firstElementChild

// setTimeout(() =>{
//     firstChild.innerHTML = '(Modified)'
// }, 5000)

// setTimeout(() => {
//     list.lastChild.remove()
// }, 3000);

//    clone

// let lastItem = list.lastElementChild.cloneNode(true)
// // lastItem.innerHTML = 'Five'
// list.appendChild(lastItem)




// DOM style 

let title = document.getElementById('title')
title.style.color = '#f00'
title.style.fontSize = '4rem'
title.style.background = '#000'

// let styleObj = {
//     background: 'black',
//     fontSize: '30px',
//     color: '#efefef'
// }

// let list = document.getElementById('list');

// [...list.children].forEach(li => Object.assign(li.style, styleObj))

// Object.assign(list.style, styleObj)

     
    //   DOM event 

    // adding element 

let btn = document.getElementById('btn')


let list = document.getElementById('list')

btn.addEventListener('click', function (e) {
    // alert('I have clicked')
    let item = list.lastElementChild.cloneNode(true)
    item.innerHTML = 'i am newly created list'
    list.appendChild(item)
});

// removing Element 
list.addEventListener('click', function (e) {
    if (this.contains(e.target)) {
        e.target.remove()
    }
})

    // event handeling 

let name = document.getElementById('name')

name.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('show-name').innerHTML = `Your Name is ${event.target.value}`
        event.target.value = ''
    }
})


// form handling 

let form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    let isValid = false
    let formData = {};
    [...this.elements].forEach(el => {
        if (el.type !== 'submit') {
            isValid = validator(el)
            if (isValid) {
                formData[el.name] = el.value
            } else {
                el.classList.add('is-invalid')
                alert(`${el.name} is Required`)
            }
        }
    })
    if (isValid) {
        console.log(formData)
        this.reset()
    }
})

function validator(el) {
    if (!el.value) {
        return false
    } 

    return true
}

