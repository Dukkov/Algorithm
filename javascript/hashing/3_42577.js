function solution(phone_book) {
    const phoneNumObj = {};

    phone_book.forEach(element => {
        phoneNumObj[element] = element.length;
    });
    console.log(phoneNumObj);
}

const phone_book = ["12", "123", "1235", "567", "88"];
solution(phone_book);