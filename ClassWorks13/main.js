const paragNode = document.querySelectorAll('.text') // Node.list

const parag = document.getElementsByClassName('text') // html коллекция
console.dir(parag[0]);

Array.from(parag).forEach(elem => {
    elem.style.color = 'red'
});

// контекст this parag
new Array().forEach.call(parag, elem => {
    elem.style.color = 'gray'
})

// добавили новый р и он не застилится 
const el = document.createElement('a')
let url = 'https://google.com'
el.href = url
el.target = '_blank'
el.id = 'newId'
el.className = 'text'
el.innerText = 'new paragraph'
// вместе с тегом
el.innerHTML = '<p>google</p>'
document.body.appendChild(el)

// ---------------------------------------------

const arr = [{
        id: 1,
        title: 'Anna',
        descr: 'some text',
        date: new Date().toDateString()
    },
    {
        id: 2,
        title: 'Bob',
        descr: 'some text2',
        date: new Date().toDateString()
    }
]

const imgUrl = 'https://cdn0.iconfinder.com/data/icons/famous-character-vol-1-colored/48/JD-24-64.png';

const renderCard = (user) => {
    const card = document.createElement('div')
    card.className = 'user-card';
    card.id = `user${user.id}`;
    // img
    const img = document.createElement('img')
    img.src = imgUrl;
    img.alt = 'icon';
    img.classList.add('user-card__img');
    // img.classList.add('active');
    // img.classList.remove('active');
    img.classList.toggle('active'); // если нет класса добавит, если есть удалит
    card.appendChild(img);
    // h1
    const h1 = document.createElement('h1')
    h1.className = 'user-card__title';
    h1.innerText = user.title;
    card.appendChild(h1);
    // p
    const p = document.createElement('p')
    p.className = 'user-card__descr';
    p.innerText = user.descr;
    card.appendChild(p);
    // span
    const span = document.createElement('span')
    span.className = 'user-card__date';
    span.innerText = user.date;
    card.appendChild(span);

    // button
    const button = document.createElement('button')
    button.className = 'user-card__button';
    button.innerText = 'click';
    button.onclick = function(e) {
        const id = user.id
        // console.log(arr.find(el => id == el.id))
        const parel = this.parentElement
        const name = parel.children[1].innerText
        if (name === 'Anna') {
            console.log(parel.style.backgroundColor = 'green')
        }
         // вместо this
    }
    card.appendChild(button);

    return card
}

const renderMain = (arrayOfUsers) => {
    const mainElement = document.querySelector('main')

    mainElement.innerHTML = ''
    for (let user of arrayOfUsers) {
        const card = renderCard(user)
        mainElement.appendChild(card)
    }
}


const renderSortedCards = (type) => {
    // if (type === 'asc')
    // все св изб от ссылочности, арр не помен
    const newArr = [...arr]
    newArr.sort((a, b) => {
        if (a.title < b.title) return type === 'asc' ? -1 : 1
        if (a.title > b.title) return type === 'asc' ? 1 : -1
        if (a.title === b.title) return 0
    })

    renderMain(newArr)
}

renderSortedCards('asc')

const elements = document.getElementsByClassName('user-card')
console.log(elements)

const inp = document.getElementById('nameInput')
// inp.addEventListener('onChange', function(e))

inp.onchange = function(e) {
    renderMain(arr.filter(el => el.title.toLowerCase().includes(e.target.value.toLowerCase())))
    console.dir(e.target.value) // всегда строка
}