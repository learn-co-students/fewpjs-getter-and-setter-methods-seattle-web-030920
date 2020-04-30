class Circle{
    constructor(radius){
        this.radius = radius
    }

    pi(){
        return Math.PI
    } 

    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return this.radius * 2 * this.pi() 
    }

    get area(){
        return this.pi() * this.radius ** 2
    }

    set diameter(d){
        this._diameter = d 
        this.radius = d / 2
    }

    set circumference(c){
        this._circumference = c 
        this.radius = c / ( 2 * this.pi())
    }

    set area(a){
        this._area = a 
        this.radius = (a/this.pi()) ** .5
    }
}