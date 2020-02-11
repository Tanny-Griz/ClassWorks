import btnArr from '../data/btnArr'; // импорт кнопок
import { renderMain } from '../services/header.services'; //

export const renderHeader = () =>{
    const headerEl = document.createElement('header');
    btnArr.forEach(btn => {
        const btnElem = document.createElement('button');
        btnElem.id = btn.id;
        btnElem.innerText = btn.text;
        btnElem.onclick = function() {
            renderMain(btn.id)
        }
        headerEl.append(btnElem);
    });
    document.body.append(headerEl)
}