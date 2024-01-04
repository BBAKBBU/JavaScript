//매개변수의 기본값 지정
function hello1(name, Message){
    console.log(`${name}님, ${Message}`);
}

hello1("박부건", "안녕")
hello1("길동홍")

function hello3(name, Message){
    console.log(`${name}님, ${Message}`);
}

hello3("박부건", "안녕");
hello3("길동홍")

//전개 구문 ...변수명
//나머지 매개 변수로 사용할 때
//매개변수를 고정하기 어려울 경우에 전개 구문으로 변수 하나 지정.
function addNum(...numbers){
    let sum = 0;
    //전달 받은 값들로 합계 계산.
    for(let number of numbers){
        sum += number;
    }
    return sum;
}

consolelog("addNum(1,10) : ", addNum(1,10));
consolelog("addNum(1,2,3,4,5,6,7,8,9,10) : ", addNum(1,2,3,4,5,6,7,8,9,10));

//전개구문으로 배열과 배열을 연결
let animal = ["bird", "dog", "cat"];
let fruits = ["apple", "banana", "mango"];

//기존 배열 연결 방식 : concat()
console.log("animal과 fruits연결 : ", animal.concat(fruits));
console.log("[...animal, ...fruits] : ", [...animal, ...fruits]);

//배열 복사하기
//배열은 주소를 복사함 => 값이 모두 바뀜
console.log("fruits : ", fruits)
let fruits2 = fruits;
fruits2[1] = "grape";

console.log("fruits : ", fruits)
console.log("fruits2 : ", fruits2)

//베열 내용만 복사 -> 전개구문 사용
console.log("fruits : ", fruits)
let fruits3 = [...fruits]
console.log("fruits3 : ", fruits3)
fruits3[1] = "orange"
console.log("fruits : ", fruits)
console.log("fruits3 : ", fruits3)

//객체 프로퍼티
//객체 프로퍼티에 접근 .(점)표기법 사용.
//ES2015 이루에는 [](대괄호)를 사용할 수 있음
const book = {
    title : "JavaScript"
    
}
//프로퍼티 추가
//book.published date = "2023-11-15"; //신덱스 에러 => 뛰어쓰기 등 공백 안됨

//대괄호 표기법으로 사용
book["published date"] = "2023-11-15"
console.log("book : ",book);

//es2015부터는 함수나 계산식을 프로퍼티 이름으로 사용
function fn(){
    return "result"; //함수의 리턴 값이 프로퍼티됨
}
const obj1 = {
    [fn()] : '함수 키' //함수를 프로포티로 사용
}

console.log("obg1 : ", obj1)

function add(a, b){
    return a + b;
}

const obj2 = {
    [`${add(10,20)}`] : '계산식 키'
}

console.log("obj2: ", obj2)

//객체 생성 시 객체 밖에서 점 표기법으로 프로퍼티 이름과 값 지정 가능
let student = {
    name : '박부건'
}

student.age = 99;
console.log("student : ", student)

//변수에 저장된 값을 프로퍼티로 사용해야 할 경우가 있다
//프롬프트창으로 입력 받아 그 값을 프로퍼티로 사용하는 경우
//이 경우 생성자 함수로 개체를 정의하여 사용
function makeUser(name, age){
    return{
        name : name,
        age : age //변수와 프로퍼티 이름이 같을 때 주로 ㅅㅏ용

    }
}

let user1 = makeUser("박부건", 23)
console.log("user1 : ", user1)

//위 코드에서 객체 정의 시 변수와 프로퍼티 이름이 같을 때 줄여서 사용 가능함
function makeUser(name, age){
    return{
        name,
        age //프로퍼티 단축 값
    }
}

let user2 = makeUser("박부건", 23)
console.log("user2 : ", user1)

/*프로퍼티 단축 표기법 => name : name 
    객체 리터럴에서 사용
    직접 할당. 주로 단단한 객체 초기화에 사용
this.name = name
    생성자 함수 내부에서 사용
    객체의 매서드나 속성을 초기화 하는데 사용
    생성자 함수를 통해 객체를 만들 때 사용*/

//객체에서 심벌키 사용
//Symbol => ES2015 이후에 추가된 원시 자료형
//한 번 정의하면 값을 변경할 수 없다
let user_id1 = Symbol() //유일한 값
let user_id2 = Symbol()

console.log("user_id1 === user_id2 : ", user_id1 === user_id2)
//심벌을 사용하여 프로퍼티 정의하기
//프라이빗 객체.=>외붕서 프로퍼티를 알 수 없다
const id = Symbol("id");
const tel = Symbol("te1 number");

const member = {
    name : "박부건",
    age : 23,
    [id] : 202118007,
    [tel] : function(){
        alert(prompt("전화번호 : "));
    }
}

for(item in member){
    console.log(`${item} : ${member[item]}`);
}

//심벌키에 접근
//대괄호를 사용하여 프로퍼티나 매서드에 접근
//매서드 []()
console.log("member[id] : ", member[id])
//console.log(member[tel]())

//심벌은 만들 때마다 유일한 값을 가짐
//상황에 따라 만든 심벌을 다른 곳에서 사용해야 할 경우가 있다
//여러 곳에서 같이 사용할 수 있는 심벌을 전역 심벌이라고 한다
//Symbol.for()매서드
let tel_num = Symbol.for("tell_num");
let phone = Symbol.for("tel_num");

console.log("tel_num === phone : ", tel_num === phone)

//Symbol.kyFor()매서드
//전역 심벌의 키를 찾는다
console.log("Symbol.key(phone) : ", Symbol.key(phone))