import { renderUser } from "../container/user";
// const mainElement = document.querySelector('main');
import { renderAlbums } from "../container/albums";

// забираем мэйн из дома, 
export const renderMain = id => {
    if (id === 'userBtn') {
        renderUser()
        // mainElement.innerHTML = ''
        // mainElement.innerHTML = `<p>User</p>`
    }
    if (id === 'albumsBtn') {
        renderAlbums()
        // mainElement.innerHTML = ''
        // mainElement.innerHTML = `<p>Albums</p>`

    }
    if (id == 'photosBtn') {
        // mainElement.innerHTML = ''
        // mainElement.innerHTML = `<p>Photos</p>`
    }
}