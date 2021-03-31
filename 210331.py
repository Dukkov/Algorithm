import timeit
start_time = timeit.default_timer()
#구구단 중 입력받은 단을 출력
# n = int(input())

# for i in range(1,10):
#     print(n,'*',i,'=',n*i)    #각 요소 사이엔 공백 자동삽입됨

#여러번 덧셈 계산
# import sys
# T = int(sys.stdin.readline()) #input()보다 sys.stdin.readline() 실행속도가 빠름
# tmp = []

# for i in range(T):
#     a,b = map(int,sys.stdin.readline().split())   #여러줄 입력받을때 꼭 sys.stdin.readline() 사용
#     tmp.append(a+b)

# for i in tmp:
#     print(i)

#1부터 주어진 수까지 합 출력
# n = int(input())  #반복문
# result=0

# for i in range(n+1):
#     result+=i

# print(result)

# def oneToN(n):  #재귀함수, recrusion depth exceed error 발생할 수 있음
#     if n==1:
#         return 1
#     else:
#         return n+oneToN(n-1)

# n = int(input())
# print(oneToN(n))

# n = int(input())    #공식
# print(n*(n+1)//2)

#여러번 덧셈 계산 빠르게
# import sys
# T = int(sys.stdin.readline())

# for i in range(T):
#     a,b = map(int,sys.stdin.readline().rstrip().split()) #rstrip()은 문자열에서 개행문자 제거
#     print(a+b)

#1부터 n까지 출력
# n = int(input())

# for i in range(n):
#     print(i+1)

#n부터 1까지 출력
# n = int(input())

# for i in range(n,0,-1):
#     print(i)


terminate_time = timeit.default_timer()
print('time:',terminate_time-start_time)