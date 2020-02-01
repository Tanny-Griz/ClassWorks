class MyDocument {
    static pizzaContainer = document.querySelector('main')
}

class Pizza {
    //рендерим карточку с пиццей
    static renderCard = (pizza) => {
        return `
        <div class="pizza">
            <h1 class="pizza__name">
                ${pizza.name}
            </h1>
            <p class="caloricity">
                ${pizza.caloricity}
            </p>
            <span class="price">
                ${pizza.price} $
            </span>
            <button id =${pizza.id} onclick="PizzaModel.showInfo">Show Info</button>
        </div>
        `
    }
    // отрисовка
    static renderPizzaList() {
        const container = MyDocument.pizzaContainer;
        container.innerHTML = ''
        for (let pizza of pizzaList) {
            MyDocument.pizzaContainer.innerHTML += Pizza.renderCard(pizza)
        }
    }
}

// отрендерить заново
Pizza.renderPizzaList()