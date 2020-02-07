const arr = ['Anna', 'Eva', 'pol', 'Iya']

const sliderContainer = document.getElementById('slider')

let indexOfName = 0;

const renderSlide = (name) => {
    return `<p class="banner">${name}</p>`
}

const renderSlideContainer = ((indexOfName) => {
    return () => {
        indexOfName = indexOfName === arr.length - 1 ? 0 : indexOfName + 1
        sliderContainer.innerHTML = renderSlide(arr[indexOfName])
    }
})(0)

renderSlideContainer()

setInterval(() => {
    
    
}, 1000)


