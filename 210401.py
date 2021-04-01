import timeit
start_time = timeit.default_timer()
#여러번 덧셈 계산, 서식 추가
# import sys
# T = int(sys.stdin.readline())

# for i in range(T):
#     a,b = map(int,sys.stdin.readline().rstrip().split())
#     print('Case #',i+1,': ',a+b, sep='')  #print()에서 sep은 요소 구분자, end는 문자열 마지막에 붙는 구분자

#여러번 덧셈 계산, 서식 추가2
# import sys
# T = int(sys.stdin.readline())

# for i in range(T):
#     a,b = map(int,sys.stdin.readline().split())
#     print('Case #%d: %d + %d = %d'%(i+1, a, b, a+b))

#별 찍기
# N = int(input())

# for i in range(N):
#     print(f"{'*'*(i+1):>{N}}")  #fstring을 이용한 정렬. 왼쪽정렬은 :<, 가운데 정렬은 :^, 오른쪽정렬은 :>

#N개 정수로 이루어진 수열에서 X보다 작은 수 출력
# import sys
# N,X = map(int,input().split())

# A = [n for n in sys.stdin.readline().split() if int(n)<X]   #문자열을 공백기준으로 입력받아 각 문자를 정수화해 X와 비교후 작은것만 리스트 삽입
# print(' '.join(A))  #문자열 리스트인 A에서 공백기준으로 요소 출력

#end signal 전까지 두 수를 입력받아 합을 출력
# import sys

# while True:
#     a,b = map(int,sys.stdin.readline().split())
#     if a==b==0:
#         break
#     print(a+b)

#입력이 끝날때까지 두 수를 입력받아 합을 출력
# import sys
# lines = sys.stdin.readlines()   #readlines()는 eof까지 입력받는다. eof는 ^D로 표현한다.

# for line in lines:
#     a,b = map(int,line.split())
#     print(a+b)

#100미만 정수가 주어진다. 정수의 각 자리수의 합의 1의자리수를 1의자리수로 하고, 정수의 1의자리수를 10의자리수로 하는 새로운 정수를 만든다.
#이를 반복해 처음 주어진 정수까지 돌아올때까지 걸리는 횟수를 출력
# n = int(input())
# cnt = 0
# tmp = n

# while True:
#     cnt+=1
#     new_tens = tmp%10
#     new_units = ((tmp//10)+(tmp%10))%10
#     new_n = (10*new_tens)+new_units

#     if new_n == n:
#         print(cnt)
#         break
#     tmp = new_n


terminate_time = timeit.default_timer()
print('time:',terminate_time-start_time)