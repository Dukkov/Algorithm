import timeit
start_time = timeit.default_timer()
#세 자연수 A,B,C를 입력받고 A*B*C를 구성하는 각 수의 갯수를 출력
# A = int(input())
# B = int(input())
# C = int(input())
# mul = str(A*B*C)  #혹은 mul = list(map(int,str(A*B*C)))로 [1, 7, 0, 3, 7, 3, 0, 0] 리스트를 만들수도 있다.

# for i in range(10):
#     print(mul.count(str(i)))

#10개의 정수를 입력받아 42로 나눈 나머지를 구한다. 그 중 서로 다른 값이 몇개 있는지 출력
# L = [int(input())%42 for i in range(10)]
# cnt = 0 #체크된 나머지의 개수
# remainder = 0 #서로 다른 나머지값의 개수

# for i in range(43): #나머지값의 범위는 0~42이므로 range(43) 사용
#     if L.count(i) > 0:  #현재의 나머지값이 L 내부에 존재할 때
#         remainder += 1
#         cnt += L.count(i)   #현재의 나머지값이 L 내부에 존재하는 개수만큼 cnt 증가
    
#     if cnt == 10:   #L 내부의 값이 모두 조회되었을 때
#         break

# print(remainder)    #사실 위의 코드들은 필요없고 print(len(set(L))) 한 줄이면 정답 출력가능

terminate_time = timeit.default_timer()
print('time:',terminate_time-start_time)