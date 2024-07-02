# 끝자리로 짝수와 홀수 구분
num = input('정수 입력 > ')

last = int(num[-1])
print(num)

if last == 0 or  last == 2 or last == 4 or last == 6 or last == 8 :
    print('짝수입니다.')
else :
    print('짝수가 아닙니다.')