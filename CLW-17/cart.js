const cartObj = JSON.parse(localStorage.getItem('cart')) || []

class CartComponent {
    static renderPizzaCard(cartItem){
        return `
            <div>
                <span>Name: ${cartItem.name}</span>
                <span>Count: ${cartItem.count}</span>
                <span>Price: ${cartItem.totalPrice}</span>
            </div>
        `
    }

    static renderPizzaContainer() {
        let { cartArr, totalPrice, totalCount } = cartObj;
        cartArr = cartArr ? 
        cartArr
        .filter(item => item.count)
        .map(cartItem => {
            document.body.innerHTML += CartComponent.renderPizzaCard(cartItem)
        }) : null;
        document.body.innerHTML += `<h4>Price: ${totalPrice || 0}</h4>`
        document.body.innerHTML += `<h4>Count: ${totalCount || 0}</h4>`
    }
}

CartComponent.renderPizzaContainer()