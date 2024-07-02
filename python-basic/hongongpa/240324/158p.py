# 100 이상의 숫자만 출력 ~
# array = [273, 103, 5, 32, 65, 9, 72, 800, 99]
# for num in array :
#     if num >= 100 :
#         print(f'100 이상의 수 : {num}')


# 홀짝 구분
numbers = [273, 103, 5, 32, 65, 9, 72, 800, 99]
# for i in numbers :
#     if i % 2 == 0 :
#         print(f'{i} :  짝수입니다.')
#     elif i % 2 == 1 :
#         print(f'{i} : 홀수입니다.')

# 자릿수 판별
for i in numbers :
    # 100으로 나눈 몫이 1 보다 크면 백의 자리수
    if i // 100 >= 1 :
        print(f'{i} : 세 자릿수')
    elif i //100 < 1 and i // 10 > 0 :
        print(f'{i} : 두 자릿수')
    else:
        print(f'{i} : 한 자릿수')


list_of_list = [
    [1,2,3],
    [4,5,6,7],
    [8,9]
]

for i  in range(len(list_of_list)):
    for j in range(len(list_of_list[i])) :
        print(list_of_list[i][j])


numbers = [1,2,3,4,5,6,7,8,9]
output = [[],[],[]]

for number in numbers :
    output[number%3-1].append(number)
print(output)