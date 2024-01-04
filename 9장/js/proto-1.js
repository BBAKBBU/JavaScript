//함수 밖에서 프로토타입을 사용해 함수의 메서드를 정의
//프로퍼티는 함수 안에, 메서드는 프로토타입을 사용해 정의 함
function newBook(title, page, done){
    //프포퍼티
    this.title = title;
    this.page = page;
    this.done = done;
}
//프로토 타입으로 메서드 생성
newBook.prototype.fininish = function(){
        this.done === false ? (str = '읽는 중') : (str = '완독');
        return str;
}

const nBook1 = newBook("자바스크립트", false);
const nBook2 = newBook("자바", 750, true);