//1. 브라우저 열면 팝업 열기
// 팝업창 오픈
window.open("notice.html", "이벤트 팝업", "width=400 heigth=300");

//2. 버튼 클릭 시 팝업 열기
//버튼 요소 가져오기
const btn = document.querySelector("button");

//버튼 클릭 시 
btn.addEventListener("click", ()=>{
"notice.html", "이벤트 팝업", "width=400 height=300 left=300 top=200")};