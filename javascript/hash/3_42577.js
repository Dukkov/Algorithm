// 전화번호 목록
// https://school.programmers.co.kr/learn/courses/30/lessons/42577
function solution(phone_book) {
    const phoneNumObj = {};

    phone_book.forEach(element => {
        phoneNumObj[element] = 0;
    });

    for (element of phone_book) {
        for (let i = 1; i < element.length; i++) {
            if (element.slice(0, i) in phoneNumObj)
                return (false);
        }
    }
    return (true);
}

// // const phone_book = ["12", "123", "1235", "567", "88"];
// const phone_book = ["123", "456", "789"];
// console.log(solution(phone_book));