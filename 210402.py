import timeit
start_time = timeit.default_timer()
#N개의 정수를 입력받아 그 중 최소, 최댓값 출력
# import sys
# N = int(input())  #사실상 노필요. 3~4라인을 한줄로 퉁치려면 N,*L = map(int,sys.stdin.read().split()) 쓰면 해결
# L = list(map(int,sys.stdin.readline().split()))

# print(min(L), max(L))

#9개의 자연수를 입력받아 최댓값과 인덱스를 출력
# L = [int(input()) for i in range(9)]

# print(max(L),'\n',L.index(max(L))+1, sep ='')


terminate_time = timeit.default_timer()
print('time:',terminate_time-start_time)