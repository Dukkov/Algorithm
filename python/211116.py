#1차원 배열-7 (4344)
import sys
C = int(input())
rate = [0 for i in range(C)]

for i in range(C):
    score = list(map(int,sys.stdin.readline().split()))
    N = score[0]
    avg = sum(score[1:])/N
    cnt = 0

    for j in score[1:]:
        if j>avg:
            cnt+=1
    rate[i] = "{:.3f}%".format(cnt/N*100)

for k in rate:
    print(k)








