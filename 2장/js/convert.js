//섭씨 : celsius, 화씨 : fahrenheit
//섭씨 온도 = (화씨온도-32)/1.8
//프롬프트로 화씨 온도 입력, 섭씨 온도 계산 후 출력
//출력은 alert()또는 document.weite() 중 하나를 선택
//화씨 온도 00도는 섭씨 온도 00도 입니다

//1.화씨 온도 입력 후 실수형으로 변환
let far = parseFloat(prompt("변환할 화씨온도"));
let cel;
// 2.섭씨 온도 계산
cel=((fah - 32)/1.8);
//3.출력
alert(`화씨 ${far}도는 섭씨 ${cel}도입니다.`);