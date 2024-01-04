//신청 과목 체크하기
let subject = prompt("신청할 과목을 선택하세요. 1-HTML, 2-CSS, 3-Javascript");

if(subject !== null){
    switch(subject){
        case "1" : document.write("HTML을 신청했습니다!");
            break;
        case "2" : document.write("CSS를 신청했습니다!");
            break;
        case "3" : document.write("javascript를 신청했습니다!");
            break;
        default : document.write("잘못 입력했어요. 다시 입력하세요.")
    }
}