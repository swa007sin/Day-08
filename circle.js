class Circle{
    setRadius(radius){
        this.radius=radius;
    }

    getRadius(){
        console.log(`Radius ${this.radius}`);
    }

    setColor(color){
        this.color=color;
    }

    getColor(){
        console.log(`color ${this.color}`);
    }

    getArea(){ 
        let c =this.radius;
        let a = 3.14*(c * c);
        console.log(`Area of circle is ${a}`);
    }

    getCircumference(){
        let b = 2*3.14*this.radius;
        console.log(`Circumference of circle is ${b}`);
    }

}

let obj1= new Circle();

obj1.setRadius(3);
obj1.setColor("Black");