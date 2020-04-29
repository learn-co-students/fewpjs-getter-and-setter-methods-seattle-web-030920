// Add your Circle class here

class Circle{
    
    constructor(radius){
        this.radius = radius
        this._pi = Math.PI
    }

    get diameter(){
        return (this.radius * 2)
    }
    set diameter(newDiameter){
        this.radius = newDiameter / 2
    }


    get circumference(){
        return (this._pi * this.diameter)
    }
    set circumference(newCircumference){
        this.diameter = newCircumference / this._pi
    }

    get area(){
        return ((this.radius ** 2) * this._pi)
    }
    set area(newArea){
        this.radius = newArea / this._pi
    }

}