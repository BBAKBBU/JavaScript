//입력한 숫자가 모두 짝수인지 체크하기
const num1 = parseInt(prompt("첫 번째 양의 정수 : "));
const num2 = parseInt(prompt("두 번째 음의 정수 : "));
let str;

//AND연산. 둘다 true여야 결괏값이 true입니다
if(num1 % 2 ===0 && num2 % 2 ===0){
    str = "두 수 모두 짝수입니다." ;
} else {
    str = "짝수가 아닌 수가 있습니다."
}
alert(str);