# (15596) 리스트 a 내부의 모든 정수 합을 구하는 함수
# def solve(a: list):
#     return int(sum(a))

# ----------------------------------------------------------------------------------------------------

# (4673) 10000 이하의 셀프 넘버를 한줄씩 출력하는 함수
# def self_number(a: int):
#     a_list = list(range(1,a+1))   # 1~10000 리스트 생성
#     dn_list = []  # 생성자가 있는 정수를 저장할 리스트
#     for n in range(1,a):
#         dn = n+sum(map(int,str(n)))   # d(n)은 생성자가 있는 정수
#         # d(n)은 다음과 같이 구할 수도 있음
#         # dn=n
#         # while(n>0):
#         #     dn+=n%10
#         #     n//=10
#         dn_list.append(dn)
    
#     answer_list = sorted(list(set(a_list)-set(dn_list)))  # 1~10000 중 생성자가 있는 정수를 제외한 셀프 넘버
#     for i in answer_list:
#         print(i)

# self_number(10000)  # 10000 이하의 셀프 넘버 출력 함수 호출

# ----------------------------------------------------------------------------------------------------

# (1065) 1~N까지의 정수 중 한수의 개수를 출력하는 함수

def hansoo(N: int):
    if (N//100==0): # N이 100 미만인경우 1~N 모두 한수이므로 N 출력
        print(N)
    else:
        answer = 99
        for i in range(100, N+1):   # 100부터 N까지 하나씩 검사
            seq = list(map(int, str(i)))    # 각 자릿수 분리
            if (seq[2]==(2*seq[1])-seq[0]): # 등차수열 점화식에 부합하면 한수 개수 추가
                answer += 1  
        print(answer)

N = int(input())
hansoo(N)