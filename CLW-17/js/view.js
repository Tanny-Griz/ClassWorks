class MyDocument {
    static pizzaContainer = document.querySelector('main')
}

class Pizza {
    /// рендерим карточку с пиццей
    static renderCard(pizza) {
        return `
        <div class="pizza" id="pizza-card">
            <h1 class="pizza__name">
                ${pizza.name}
            </h1>
            <p class="caloricity">
                ${pizza.caloricity} Cal.
            </p>
            <span class="price">
                ${pizza.price} $
            </span>
            <button 
            data-id-asdasd=${pizza.id}
            id=${pizza.id} 
            onclick="PizzaModel.showInfo.call(this)"
            >
                Show info
            </button>
        </div>  
        `
    }

    static renderPizzasList() {
        const container = MyDocument.pizzaContainer;
        container.innerHTML = ''
        for (let pizza of pizzaList){
            MyDocument.pizzaContainer.innerHTML += Pizza.renderCard(pizza)
        }
    }
}

const getFromStorage = () => {
    let arrOfMyPizzas = JSON.parse(localStorage.getItem('myPIzzas'))
    pizzaList = arrOfMyPizzas ? [...pizzaList, ...arrOfMyPizzas] : pizzaList;
}

getFromStorage()
Pizza.renderPizzasList()
