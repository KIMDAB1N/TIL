# 사용자에게 태어난 연도를 입력받아 띠를 출력하는 프로그램
# 작성 시 입력받은 연도를 12로 나눈 나머지를 사용

year = int(input('태어난 해를 입력해주세요. > '))

if year % 12 == 0 :
    print('원숭이띠')
elif year % 12 == 1 :
    print('닭띠')
elif year % 12 == 2 :
    print('개띠')
elif year % 12 == 3 :
    print('돼지띠')
elif year % 12 == 4 :
    print('쥐띠')
elif year % 12 == 5 :
    print('소띠')
elif year % 12 == 6 :
    print('범띠')
elif year % 12 == 7 :
    print('토끼띠')
elif year % 12 == 8 :
    print('용띠')
elif year % 12 == 9 :
    print('뱀띠')
elif year % 12 == 10 :
    print('말띠')
elif year % 12 == 11 :
    print('양띠')