// Add your Circle class here
class Circle {
    constructor (radius) {
        this.radius=radius
    }
    get diameter() {
        return this.radius*2
    }
    get circumference() {
        return 2* Math.PI * this.radius
    }
    get area() {
        return Math.PI * (this.radius**2)
    }

    set diameter(diameter) {
        this.radius=diameter/2
    }
    set circumference(circumference) {
        this.radius=circumference/ (2*Math.PI)
    }
    set area(area) {
        this.radius= (area/Math.PI)**0.5
    }
}