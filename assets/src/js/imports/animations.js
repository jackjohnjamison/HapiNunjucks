import { pxToInt } from './utils'

class animateProperty {
    animate(step, target) {
        if (!this.isAnimating) {
            this.isAnimating = true
            let propertyValue = pxToInt(this.element.style[this.property])
            let condition

            if (target > propertyValue) {
                condition = () => {return pxToInt(this.element.style[this.property]) >= target}
                step *= -1
            } else {
                condition = () => {return pxToInt(this.element.style[this.property]) <= target}
            }
            
            let animation = setInterval(frame.bind(this), 10)

            function frame() {
                propertyValue += step
                this.element.style[this.property] = propertyValue + 'px'
                if (condition()) {
                    this.element.style[this.property] = target + 'px'
                    clearInterval(animation)
                    this.isAnimating = false
                }
            }
        }
    }

    constructor(element, property) {
        this.isAnimating = false
        this.element = element
        this.property = property
    }
}

export { animateProperty }