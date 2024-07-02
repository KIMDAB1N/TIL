# 시각으로 오전 오후 구하기

import datetime

now_hour = datetime.datetime.now().hour

# 0 ~ 11 : 오전, 12 ~ 23 : 오후 
if 0 <= now_hour <= 11 :
    print(f'현재 시각은 {now_hour}시로 오전입니다!')
elif 12 <= now_hour <= 23 :
    print(f'현재 시각은 {now_hour}시로 오후입니다!')
    
    
# 계절을 구분하는 프로그램 
# 봄 (3 ~ 5), 여름 (6 ~ 8), 가을 (9 ~ 11), 겨울 (12 ~ 2)

now_month = datetime.datetime.now().month

if 3 <= now_month <= 5 :
    print(f'이번 달은 {now_month}월로 봄입니다!')
elif 6 <= now_month <= 8 :
    print(f'이번 달은 {now_month}월로 여름입니다!')
elif 9 <= now_month <= 11 :
    print(f'이번 달은 {now_month}월로 가을입니다!')
elif now_month == 12 or 1 <= now_month <= 2 :
    print(f'이번 달은 {now_month}월로 겨울입니다!')
    