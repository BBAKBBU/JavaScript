/* // const factor = 5; //변수 선언 및 생성

// function calc( ){
//     return num = factor; // 오류 발생 지역
// }
// {
//     const num = 10; //let과 const는 블럭안에서만 사용하는 지역변수이기에 값을 도출하지 못함, num은 지역변수
//     let result = calc(); //함수 호출
//     console.log(`result : $(result)`);
// }

const factor = 5; //변수 선언 및 생성

function calc( ){
    return num = factor; // 오류 발생 지역
}
{
    const num = 10; //let과 const는 블럭안에서만 사용하는 지역변수이기에 값을 도출하지 못함, num은 지역변수
    let result = calc(); //함수 호출
    console.log(`result : $(result)`);
} */
function greeting(){
    hi = "hello";
}
greeting();
console.log(hi);