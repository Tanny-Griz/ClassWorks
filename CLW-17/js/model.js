const setToLocalStorage = () => {
    const obj = {
        cartArr: Cart.cartArr,
        totalPrice: Cart.totalPrice,
        totalCount: Cart.totalCount,
    }
    localStorage.setItem('cart', JSON.stringify(obj))
}

class Cart {
    static cartArr = pizzaList.map(pizza => {
        return {
            id: pizza.id,
            name: pizza.name,
            count: 0,
            totalPrice: 0,
        }
    })

    static totalPrice = 0

    static totalCount = 0

    static setPizza(idOfCurrentPizza) {
        const pizzaModel = pizzaList.find(p => p.id === idOfCurrentPizza)
        for (let pizza of Cart.cartArr){
            if (pizza.id === idOfCurrentPizza){
                pizza.count += 1
                pizza.totalPrice += pizzaModel.price
                Cart.totalPrice += pizzaModel.price
                Cart.totalCount++
                setToLocalStorage()
                break;
            }
        }
    }
}
 

class PizzaModel {
    static showInfo() {
        Cart.setPizza(+this.id)
    }
}