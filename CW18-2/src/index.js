// import { pizzaList } from './data/list.js';
import './styles/main.scss';
import { Users } from './users';
import { Albums } from './albums'
import { getUsers, getAlbums } from './services/usersApi.js'


const mainElement = document.querySelector('main');

const buttonUsers = document.querySelector('#one');
const buttonAlbums = document.querySelector('#two');

buttonAlbums.onclick = function() {
    getAlbums().then(albums => {
        mainElement.innerHTML = '';
        mainElement.innerHTML = Albums.renderAlbums(albums)
    })
}

buttonUsers.onclick = function () {
    getUsers().then(users => {
        mainElement.innerHTML = '';
        mainElement.innerHTML = Users.renderUsers(users)
    })
}










// pizzaList.forEach(pizza => {
//     document.body.innerHTML += `<h1>${pizza.name}</h1>`;
// })
