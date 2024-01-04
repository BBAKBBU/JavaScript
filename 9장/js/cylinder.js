//생성자 함수 만들기
//function Cylinder(cylinderDiameter, cylinderHeight) {
//    this.dimeter = cylinderDimeter; //지름
//    this.height = cylinderHeight; //높이
//    this.volume = function(){ //부피계산메서드
        //반지름계산
//        let radius = this.diameter / 2;
        //부피계산 = 반지름*반지름*파이*높이
//        return(Math.PI*radius*radius*this.height).toFixed(2);
//    }
//} 

//클래스 만들기
class Cylinder{
    constructor(cylinderDiameter, cylinderHeight) {
        this.dimeter = cylinderDimeter; //지름
        this.height = cylinderHeight; //높이
    }
    volume(){
    let radius = this.diameter / 2;
    return(Math.PI*radius*radius*this.height).toFixed(2);
    }
}

//버튼가져오기
const btn = document.querySelector("button");
//결과 표시 영역 가져오기
const result = document.querySelector("#result");
//버튼 클릭 시 입력한 지름과 높이를 가지고 생성자를 호출
btn.addEventListener("click", function(event){
    event.preventDefault();
    //지름 값
    const diameter = document.querySelector('#cy1-diameter').value;
    //놓이 값
    const height = document.querySelector('#cy1-height').value;
    //빈칸인지 아닌지 체크
    if(diameter ===""|| height ===""){
        result,this.innerText ='지름,높이 값을 모두 입력하세요.';
    }
    else{
    //객체 값
    let cyliner = new Cylinder(parseInt(diameter), parseInt(height));
    //계산 결과 값 result에 표시
    result.innerText = `지름 ${diameter}, 높이 ${height}인 원기둥의 부피는 ${cyliner.volume}입니다`;
}});