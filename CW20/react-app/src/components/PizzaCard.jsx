import React from 'react';

const PizzaCard = (props) => {
    // console.log(props)
    // const {pizza, index} = props
    return (
        <div className="card">
            <h1>{props.pizza.name}</h1>
            <p>{props.pizza.caloricity}</p>
            <p>{props.pizza.price}</p>
        </div>
        
    )
}

export default PizzaCard;