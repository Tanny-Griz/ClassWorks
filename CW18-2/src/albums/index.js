export class Albums {
    static renderAlbums(albums) {
        return albums.map(album => {
            return `
            <div class="albums">
                <p>${album.title}</p>
            </div>
        `
        }).join('')

    }
}