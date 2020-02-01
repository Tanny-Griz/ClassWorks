class PizzaModel {
    static showInfo(pizza) {
        const pizza = pizzaList.find(pizza => pizza.id == this.id)
        for(let key in pizza) {
           console.log(`${key}`)
        }
        
    }
}