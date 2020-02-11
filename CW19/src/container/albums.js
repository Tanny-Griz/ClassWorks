import { getAlbums } from "../services/api.services";

const renderAlbum = (albums) => {
    return `
    <div class="card_albums">
        <h3 class="card_albums_userId">${albums.userId}</h3>
        <p class="card_albums_id>${albums.id}</p>
        <p class="card_albums_title>${albums.title}</p>
    </div>
    `
}

export const renderAlbums = async () => {
// данные из аксиоса, перебрали, каждый кто попадает отрисовывает
    const albumsArr = await getAlbums();


    const mainContainer = document.querySelector('main');
    mainContainer.innerHTML = '';

    albumsArr.forEach(albums => {
        mainContainer.innerHTML += renderAlbum(albums)
    });
}