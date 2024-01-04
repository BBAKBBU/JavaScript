//for...in 문으로 키와 값 가져오기
const gitBook = {
    title : "깃&깃허브 입문",
    pubData : "2019-12-06",
    pages : 272,
    finished : true
}

for(key in gitBook) {
    document.write(`${key} : ${gitBook[key]}<br>`);
}