class Uber{
    constructor(pickup,drop,km){
        this.pickup=pickup;
        this.drop=drop;
        this.km=km;
    }
    uberprice(){
        console.log(` Pick up location : ${this.pickup}   \n Drop location : ${this.drop} \n Total Km : ${this.km}`);
        console.log(` UberAuto \n Auto rickshaws at the tap of a Button  \n Total Fare : ${this.km*14}` );
        console.log(` Moto \n Affordable,Motorcycle rides \n Total Fare : ${this.km*6}` );
        console.log(` UberGo \n Affordable,Compact rides  \n Total Fare : ${this.km*23}` );
        console.log(` Premier \n Select Sedans, Top-rated drivers \n Total Fare : ${this.km*27}` );
        console.log(` GO Sedan \n Affordable rides in a sedan \n Total Fare : ${this.km*24}` );
        console.log(` UberXl \n Affordable suv rides \n Total Fare : ${this.km*35}` );
    }
};

let obj1= new Uber("Thambaram","Chrompet",7);
obj1.uberprice();