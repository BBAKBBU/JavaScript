class pet{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }


    run(){
        document.write(`<h1>${this.color} ${this.name}가 달린다.</h1>`);
    }
}

class Cat extends pet{
    constructor(name, color, breed){
        super(name, color);
        this.breed = breed
    }

    viewInfo(){
        document.write(`<h1>이름 : ${this.name}, 품종 : ${this.breed}, 색깔 : ${this.color}.</h1>`);
    }
}

const bori = new Cat("보리", "흰색", "코숏");
bori.viewInfo();
pet.run1();