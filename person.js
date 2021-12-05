class Person {
    constructor(name,age,email,phnumber){
        this.name=name;
        this.age=age;
        this.email=email;
        this.phnumber=phnumber;
    }
    getdetials(){
        console.log(
        `Name : ${this.name } 
        Age : ${this.age} 
        Email : ${this.email} 
        Phone Number : ${this.phnumber}`);
    }

}

let  obj1= new Person("hari","21","harisudhan18@gmail.com","9791749054");

obj1.getdetials();