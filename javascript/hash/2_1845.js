// 폰켓몬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    const numsObj = {};

    nums.forEach(element => {
        numsObj[element] = 0;
    });

    if ((nums.length / 2) < Object.keys(numsObj).length)
        return (nums.length / 2);
    else
        return (Object.keys(numsObj).length);
}

// const nums = [3,1,2,3];
// solution(nums);