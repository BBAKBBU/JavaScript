//반복되는 실행 멈추기
let count = 0;

let timer = setInterval(() => {
    console.log("안녕하세요.");
    counter++;
    if(counter === 5)//2. 만약 count가 5가 되면 멈춤
        clearInterval(timer);
}, 2000);//1. 2초마다 함수가 실행