//for...of 문으로 배열값 가져오기
const students = ["Park", "Kim", "Lee", "Kang"];

//students에 student가 있는 동안 계속 반복합니다.
for(student of students){
    document.write(`${student}.`);
}