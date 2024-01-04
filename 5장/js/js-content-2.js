//제목 가져오기
const title = document.querySelector("#title") 

//이름 가져오기
const userName = document.querySelector("#desc p");
//(2)const userName = document.querySelectorAll("#desc .user")[0];

//프로필 이미지 가져오가
const pfimg = document.querySelector("#profile img");

//제목 클릭시 내용 변경
title.onclick = () => title.innerText = "프로필";

//이름 클릭 시 이름만 찐하게 만듬
userName.onclick = () => userName.innerHTML = "이름 : <b>박부건</b>"

//이미지 클릭시 이미지를 변경(이미지의 파일(경로 포함)를 비꾼다)
pfimg.onclick = () => pfimg.src = "imges/pf2.png";