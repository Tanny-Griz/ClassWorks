class PizzaModel {
    static showInfo() {
        const pizza = pizzaList.find(pizza => pizza.id == this.id)
        for(let key in pizza) {
            console.log(`${key} : ${pizza[key]}`)
        }
    }
}