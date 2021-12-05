class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        for(var i=0;i<this.title.length;i++){
            if(this.rating[i]==undefined || this.rating[i]==""){
                this.rating[i]="PG";
            }
        }
    }
    getPG(){
        let getpg=[];
        for(var i=0;i<this.title.length;i++){
            if(this.rating[i]=="PG"){
               getpg.push(this.title[i]);
            }
        }
        console.log(getpg);
    }
}
let obj= new Movie(["Casino Royale"],["Eon Production"],["PG13"]);