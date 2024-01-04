//제목 가져오기
const title = document.querySelector("#title") 

//아이디가 Title인 요소를 클릭 시 배경색과 글자색 수정
title.onclick = () => {
    title.style.backgroungColor = "midnight";
    title.style.color = "pink";
}