# 다음 코드는 inch 단위의 자료를 입력받아 cm 단위를 구하는 예제입니다.
inch = float(input('숫자 입력 (inch) > '))
cm = inch * 2.54
print(inch)
print(f"{cm} cm")


# 원의 반지름을 입력받아 원의 둘레와 넓이를 구하는 코드
r = float(input('원의 반지름 입력 > '))
print('반지름 : ', r)
print('둘레 : ', 2 * 3.14 * r )
print('넓이 : ', 3.14 * r ** 2)


# a와 b 라는 이름의 변수로 이름을 받고 서로 값을 교체하여 출력
# 방법 1
input_a = input('문자열 A 입력 > ')
input_b = input('문자열 B 입력 > ')
print(input_a, input_b)
print(input_b, input_a)

# 방법 2 (swap 사용)
input_a_swap = input('문자열 A 입력 > ')
input_b_swap = input('문자열 B 입력 > ')
print(input_a_swap, input_b_swap)
temp =  input_a_swap
input_a = input_b_swap
input_b = temp
print(input_a_swap, input_b_swap)