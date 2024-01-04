//클래스 생성
class BookC{
    //프로퍼티 생성.
    constructor(title, price){
        this.title = title;
        this.pricr = price;
    }
    //매서드
    buy(){
        console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다.`);
    }
}

//객체 생성
const book1 = new BookC("JAVA", 25000);
book1.buy();

//기존클래스를 확장하여(상속받아)새로운 클래스 선언
class TextbookC extends BookC{
    constructor(title, price, major){
        super(title, price); //상위 클래스의 프로퍼티 재ㅅㅏ용
        this.major = major; //새로운 프로퍼티 정의
    }
    //새로운 매서드 정의
    buyTextbook(){
        console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다.`);
    }
}

//객체생성
const book2 = new TextbookC("자바스크립트", 23000, "컴퓨터공학");
book2.buyTextbook();
book2.buy();