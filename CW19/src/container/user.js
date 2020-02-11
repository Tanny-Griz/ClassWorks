import { getUsers } from "../services/api.services";

// массив обьектов, выводим в виде карты. строка += иннер, если криэйт, то аппенд
// стэйт пропсы запускают переотрисовку
// user это пропс
const renderCard = (user) => {
    return `
    <div class="card">
        <h3 class="card_name">${user.name}</h3>
        <pclass="card_email>${user.email}</p>
        <address class="card_adress>${Object.values(user.address).join(', ')}address</address>
        <p class="card_phone>${user.phone}</p>
        <a href="${user.phone}">Website</a>
    </div>
    `
}

export const renderUser = async () => {
// данные из аксиоса, перебрали, каждый кто попадает отрисовывает
    const usersArr = await getUsers();


    const mainContainer = document.querySelector('main');
    mainContainer.innerHTML = '';

    usersArr.forEach(user => {
        mainContainer.innerHTML += renderCard(user)
    });
}