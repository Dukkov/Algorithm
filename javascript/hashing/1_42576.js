//완주하지 못한 선수
//https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
    const participantObj = {};

    for (element of participant) {
        if (element in participantObj)
            participantObj[element]++;
        else
            participantObj[element] = 1;
    }
    for (element of completion)
        participantObj[element]--;

     for (const [key, value] of Object.entries(participantObj)) {
        if (value !== 0)
            return (key);
    }
}