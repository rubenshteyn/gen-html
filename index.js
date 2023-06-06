class Component {
    constructor(pattern, displayParameters, modifiers, value, events) {
        this.pattern = pattern
        this.displayParameters = displayParameters
        this.modifiers = modifiers
        this.value = value
        this.events = events
    }

    addDisplayParameters(element) {
        for (const param of this.displayParameters) {
            element.classList.add(param)
        }
    }

    addValue(element) {
        element.innerHTML = this.value
    }

    addModifiers(element) {
        if(this.modifiers) {
            const modifiersKeys = Object.keys(this.modifiers)
            for (const modifiersKey of modifiersKeys) {
                element.style[modifiersKey] = this.modifiers[modifiersKey]
            }
        }
    }

    addEvents(element) {
        element.addEventListener(this.events, function (event) {
            if(event.type === 'click') {
                element.innerHTML = `Событие ${event.type} сработало!`
            }
            if(event.type === 'mousemove') {
                element.innerHTML = `Событие ${event.type} сработало!`
                element.style.opacity = "0.5"
            }
            if(event.type === 'mouseleave') {
                element.innerHTML = `Событие ${event.type} сработало!`
                element.style.scale = "1.2"
            }
        })
    }

    addNewElement() {
        const element = document.createElement(this.pattern)
        this.addDisplayParameters(element)
        this.addValue(element)
        this.addModifiers(element)
        this.addEvents(element)
        document.body.appendChild(element)
    }
}

let firstButton = new Component(
    "button",
    ['green', 'b-solid', 'b-green', 'b-1'],
    {
        borderRadius: "10px",
        padding : "10px 20px"
    }
    ,
    'Наведите курсор на меня',
    'mousemove')

firstButton.addNewElement()

let secondButton = new Component(
    "button",
    ['red', 'b-dashed', 'b-red', 'b-2'],
    {
        padding : "10px 20px"
    }
    ,
    'Кликните по мне',
    'click')
secondButton.addNewElement()

let thirdButton = new Component(
    "button",
    ['yellow', 'b-dashed', 'b-yellow', 'b-2'],
    {
        borderRadius: "20px",
    }
    ,
    'Наведите и уберите курсор с меня',
    'mouseleave')
thirdButton.addNewElement()