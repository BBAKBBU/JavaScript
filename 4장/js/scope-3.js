// var hi = "hello"; //전역 변수

// function change( ){ //함수 안에서 전역변수 값 수정 가능.
//     hi = "bye"
// }

// console.log(hi); //hello
// change(); 
// console.log(hi);



var hi = "hello"; //전역 변수

function change( ){ 
    //지역변수. 이 함수에서 사용가능.
    var hi = "bye"; 
}
console.log(hi); //hello
change(); 
console.log(hi); //hello