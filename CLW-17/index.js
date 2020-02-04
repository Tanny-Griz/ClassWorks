window.cElem = (tagName, className = "") => {
    const element = document.createElement(tagName)
    element.className = className;
    return element
}

let createPizzaIds = compositionList.map(item => {
    return { id: item.id, isChecked: false }
})

const setPIzzasToStorage = pizza => {
    let arrOfPizzasFromStorage = localStorage.getItem('myPIzzas')
    if (arrOfPizzasFromStorage) {
        arrOfPizzasFromStorage = JSON.parse(arrOfPizzasFromStorage)
        arrOfPizzasFromStorage.push(pizza)
    }
    if(!arrOfPizzasFromStorage){
        arrOfPizzasFromStorage = [pizza]
    }
    localStorage.setItem('myPIzzas', JSON.stringify(arrOfPizzasFromStorage))
}

const renderCreateModal = () => {
     const pizzaModalWrapper = cElem('div', 'pizza-create')

    // Create input name
    const labelForNameInput = cElem('label')
    labelForNameInput.htmlFor = 'nameOfPizza'
    labelForNameInput.innerText = 'Pizza name'

    const nameInput = cElem('input')
    nameInput.placeholder = 'Enter name'
    nameInput.id = 'nameOfPizza'

    pizzaModalWrapper.append(labelForNameInput, nameInput)
    // End create input name

    //Create checkboxes
    const compositionElems = compositionList.map(comp => {
        const labelForNameInput = cElem('label')
        labelForNameInput.htmlFor = 'nameOfCompos' + comp.id
        labelForNameInput.innerText = comp.name

        const nameInput = cElem('input')
        nameInput.type = 'checkbox'
        nameInput.id = 'nameOfCompos' + comp.id
        nameInput.onchange = function(){
            createPizzaIds = createPizzaIds.map(elem => {
                if (elem.id === comp.id) {
                    return { 
                        id: elem.id, 
                        isChecked: this.checked
                    }
                }
                return elem
            })
        }

        labelForNameInput.append(nameInput)
        return labelForNameInput
    })

    pizzaModalWrapper.append(...compositionElems)
    //End create checkboxes

    //Create info elems
    const priceElem = cElem('p')
    priceElem.id = 'price-info'
    priceElem.innerText = '$ 0'

    const caloricityElem = cElem('p')
    caloricityElem.id = 'caloricity-info'
    caloricityElem.innerText = 'Cal: 0'

    pizzaModalWrapper.append(caloricityElem, priceElem)
    //End create info elems

    //crete btn create pizza
    const btnCreate = cElem('button')
    btnCreate.innerText = 'create pizza'
    btnCreate.onclick = function(){
        const nameOfPizza = nameInput.value;
        const ids = createPizzaIds.filter(el => el.isChecked).map(el => el.id)

        function PizzaConstructor(name, arrOfIds) {
            this.id = pizzaList.length + 1;
            this.name = name || "My Pizza";
            this.caloricity = 100;
            this.price = 50;
            this.composition = [];
            this.img = "19.png";
      
            for (let id of arrOfIds) {
              for (let comp of pizzaList) {
                if (id == comp.id) {
                  this.composition.push(comp.name);
                  this.price += comp.price;
                  this.caloricity += comp.caloricity;
                }
              }
            }
            this.isCustom = true;
            pizzaList.push(this);
          }
          const myPizza = new PizzaConstructor(nameOfPizza, ids)
          setPIzzasToStorage(myPizza)
          pizzaList.push(myPizza)
          Pizza.renderPizzasList()
    }
    pizzaModalWrapper.append(btnCreate)
    //End create btn create pizza

    return pizzaModalWrapper
}

const createPizzaBtn = document.getElementById('createPizza')
const modalContainer = document.getElementById('modalContainer')
modalContainer.addEventListener('click', function(e){
    if (e.target.className === 'modal-container') {
        this.innerHTML = ''
        this.style.display = 'none'
    }
})

createPizzaBtn.addEventListener('click', function(){
    modalContainer.innerHTML = ''
    modalContainer.append(renderCreateModal())
    modalContainer.style.display = 'flex'
})