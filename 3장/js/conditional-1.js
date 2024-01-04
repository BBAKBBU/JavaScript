//프롬프트 창에서 {취소}버튼을 클릭했는지 체크하기1
let userInput = prompt("이름을 입력하세요.");

if(userInput === null){
    alert("취소했습니다.");
}else{
    alert(userInput);
}