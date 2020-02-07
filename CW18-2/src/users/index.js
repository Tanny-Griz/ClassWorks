export class Users {
    static renderUsers(users) {
        return users.map(users => {
            return `
            <div class="book">
                <p>${users.name}</p>
            </div>
        `
        }).join('')

    }
}