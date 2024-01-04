class pet{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }


    run(){
        document.write(`<h1>${this.color} ${this.name}가 달린다.</h1>`);
    }
}

const pet1 = new pet("붕붕이", "까만");
pet.run1();