import React, { useState } from 'react';
import './App.css';
import { pizzaList } from './data/pizzaList';
import PizzaCard from './components/PizzaCard';

const App = () => {
  console.log(pizzaList)
  // создаем состояние
  const [pizzaArr, setPizzaArr] = useState([...pizzaList]);

  const handleFilterByPrice = (e) => {
    const resulrArr = pizzaList.filter(pizza => {
      return pizza.price >= e.target.value
    })
    setPizzaArr(resulrArr)
  }

  return (
    <>
    <header>
      <h2>Total count: {pizzaArr.length}</h2>
      <label htmlFor="inp">Find by price</label>
      <input type="number" placeholder="enter price" id="inp" onChange={handleFilterByPrice}/>
    </header>
      <main>
        {pizzaArr.map((pizzaObj, index) => {
          const generateKey = `pizzaCard${pizzaObj.id}`
          return <PizzaCard pizza={pizzaObj} index={index} key={generateKey}/>
        })}
      </main>
    </>
  );
}

export default App;
