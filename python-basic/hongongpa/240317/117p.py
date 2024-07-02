# 날짜/시간 활용하기

# 날짜/시간과 관련된 기능이 들어있는 모듈
import datetime

# 현재 날짜 및 시간
now = datetime.datetime.now()
# print(now)

# print(now.year)
# print(now.month)
# print(now.day)
# print(now.hour)
# print(now.minute)
# print(now.microsecond)

print(f'{now.year}년 {now.month}월 {now.day}일 {now.hour}시 {now.minute}분')