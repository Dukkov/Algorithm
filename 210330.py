#두 수 대소비교
# a, b = map(int,input().split( ))

# if(a>b):
#     print(">")
# elif(a<b):
#     print("<")
# else:
#     print("==")

#성적 변환
# a = int(input())

# if a in range(90,101):
#     print("A")
# elif a in range(80,90):
#     print("B")
# elif a in range(70,80):
#     print("C")
# elif a in range(60,70):
#     print("D")
# else:
#     print("F")

#윤년 판별
# a = int(input())

# if a%4==0:
#     if a%100!=0 or a%400==0:
#         print(1)
#     else:
#         print(0)
# else:
#     print(0)

#입력된 좌표에 대해 사분면 판별
# x = int(input())
# y = int(input())

# if x>0:
#     print(1 if y>0 else 4)
# else:
#     print(2 if y>0 else 3)

#입력된 시간에서 45분 전 시간 출력
# h,m = map(int,input().split())
# result = (60*h)+m-45    #시간을 분단위로 변환

# print(result//60%24, result%60)