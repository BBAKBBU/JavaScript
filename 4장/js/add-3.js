//1~ 전달 받은 수까지 합계를 계산하는 함수
//함수 선언.
function calcSum(n) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i; //sum = sum + i
    }
    return sum; //함수를 호출한 곳으로 돌려 줌.
}

let num = parseInt(prompt("몇까지 더할까요."));
document.write(`1부터 ${num}까지 더하면 ${calcSum(num)}`);
/*     document.write(`<h1>1부터 $(num)까지 합은 ${sum}입니다.</h1>`)
}

//사용자로부터 정수 입력 받기
let number = parseInt(prompt("정수 입력(몇 까지 더 할까요?)"))

//입력 받은 수를 인수로 함수 호출
document.write(`<hr>1부터 $(number)까지 합은 ${calcSum(number)}입니다.</hr>)

//함수 호출.
calcSum(10) //인수 값을 가지고 함수 호출 */