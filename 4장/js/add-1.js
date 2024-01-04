//1~ 전달 받은 수까지 합계를 계산하는 함수
//함수 선언.
function calcSum() {
    let sum = 0;
    for(let i = 1; i <= 10; i++) {
        sum += i; //sum = sum + i
    }
    console.log(`1부터 10까지 더하면 ${sum}입니다.`);
}

calcSum();