import timeit
start_time = timeit.default_timer()
#입력받은 N개의 점수중 최고점을 M이라 하고, 모든 점수를 점수/M*100으로 주작하여 새로 점수를 내고 그 평균을 출력
# import sys
# N = int(input())
# L = list(map(int,sys.stdin.readline().split()))
# M = max(L)  #7라인을 print(sum(L)/max(L)*100/N)으로 대체하면 4줄로 코드 끝.
#
# manipul = [i/M*100 for i in L]
# print(sum(manipul)/N)


#N개의 테스트케이스 점수를 구한다. X는 0점이고 O는 연속된 O의 갯수만큼의 점수를 갖는다.
# N = int(input())
#
# for i in range(N):
#     result = list(input())  #테스트케이스를 리스트로 변환해 문자단위로 구분
#     stack = 0   #연속된 O의 갯수를 카운트
#     score = 0   #테스트케이스의 점수
#     for i in result:
#         if i == 'O':
#             stack +=1   #O가 나올경우 스택+1
#             score += stack
#         else:
#             stack = 0   #X가 나올경우 스택 초기화
#     print(score)


#N개의 테스트케이스 점수를 구한다. 점화식을 이용한 버전
# import sys
# N = int(input())
#
# for i in range(N):
#     result = sys.stdin.readline().rstrip()
#     score = 0
#
#     for j in result.split('X'): #X를 기준으로 테스트케이스를 구분한다. 리스트 result의 각 요소는 X로 구분된 O의 덩어리
#         O = j.count('O')    #각 O의 덩어리마다 O의 갯수를 센다
#         score += O*(O+1)/2  #O의 덩어리에서 O의 갯수를 n이라 하면 그 덩어리의 점수는 n*(n+1)/2가 된다
#     print(int(score))


terminate_time = timeit.default_timer()
print('time: ', terminate_time-start_time)