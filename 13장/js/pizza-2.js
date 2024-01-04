//제작 코드
const pizza = () => {
    return new Promise((resolve, reject) => {
        resolve("피자를 주문합니다🍕.");
    });
};

//소비 코드
const step1 = (Message) => {
    console.log(Message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("피자 도우 준비");
        }, 3000);
    });
};

const step2 = (Message) => {
    console.log(Message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("토핑 완료");
        }, 1000);
    });
};

const step3 = (Message) => {
    console.log(Message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("굽기 완료");
        }, 2000);
    });
};

pizza()
    .then(step1)   //.then(result => step1(result))
    .then(step2)   //.then(result => step2(result))
    .then(step3)   //.then(result => step3(result))
    .then(console.log)   //.then(result => console.log(result))
    .then(() => {
        console.log("피자가 준비되었습니다.");
    });