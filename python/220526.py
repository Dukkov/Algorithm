# (2941) 주어진 단어가 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력하기
s = input()
ans = len(s)

ans -= s.count('-')    # 1. '-' 를 발견함 -> 단어 길이 -1

equal_idx = [i for i, value in enumerate(s) if value == '=']
for i in equal_idx:
    if s[i-1] == 'z':
        if s[i-2] == 'd':
            ans -= 2    # 2. '='의 앞 문자가 z임 -> 앞앞문자가 d인 경우 단어 길이 -2
        else:
            ans -= 1    # 2-1. '='의 앞 문자가 z임 -> 앞앞문자가 d가 아닌 경우 단어 길이 -1
    else:
        ans -= 1    # 2-2. '=' 를 발견했는데 앞 문자가 z가 아님 -> 단어 길이 -1

j_idx = [i for i, value in enumerate(s) if value == 'j']
for i in j_idx:
    if s[i-1] == 'l' or s[i-1] == 'n':
        ans -= 1    # 3. 'j' 를 발견함 -> 앞 문자가 'l' or 'n'인 경우 단어 길이 -1

print(ans)