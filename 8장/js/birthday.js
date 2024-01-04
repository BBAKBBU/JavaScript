const result = document.querySelector("#result");
const birthday = new Date("2001-01-15"); //생일
const today = new Date("2023-10-31"); //오늘 날짜

//생일로부터 오늘까지 흐른 시간 계산
let passedTime = today.getTime() - birthday.getTime();

let passedDay = Math.round(passedTime/ (1000*60*60*24));

result.innerText = passedDay;