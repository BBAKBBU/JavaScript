//버튼 요소 가져오기
const orderBtn = document.querySelector("#order");

//주문 정보 영역 가져오기
const orderinfo = document.querySelector("#orderinfo");

//책 제목 요소가져오기
const ordertitle = document.querySelector("h2"); //("#container > h2")--> 두번째 방법

//버튼 클릭 시
orderBtn.addEventListener("click", ()=>{
    //새로운 p요소 만들기
    let newP = document.createElement("p");
    //텍스트 만들기 - tutle의 텍스트 부분만 가지고 와서 텍스트 노드로 생성
    let textNode = document.createTextNode(ordertitle.innerText);

    //텍스트 노드를 p요소에 추가
    newP.appendChild(textNode);
    newP.style.fontSize = "1.5em";
    newP.style.color = "blue";
    
    //p요소를 orderInfo영역에 추가
    orderInfo.appendChild(newP);
}, {once: true}); //click이벤트가 여러번 발생해도 이벤트 리스너는 한번만 실행
