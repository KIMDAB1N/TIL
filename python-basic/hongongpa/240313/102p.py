# 문자열 찾기 

a = '하이 하이 안녕하세요?'.find('하이')        
print(a)              # 예상 결과 : 0 , 실제 결과 : 0

b = '하이 하이 안녕하세요?'.rfind('하이')
print(b)            # 예상 결과 : 3 , 실제 결과 : 3

c = '안녕하세요? 안녕안녕'
print(c.find('안녕'))           # 예상 결과 : 0, 실제 결과 : 0

d = '안녕하세요? 안녕안녕'
print(d.rfind('안녕'))           # 예상 결과 : 9, 실제 결과 : 9

