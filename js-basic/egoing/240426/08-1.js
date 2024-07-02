// 배열 (array) : 연관된 데이터를 모아서 통으로 관리하기 위해 사용하는 데이터 타입
// 즉, 여러 개의 데이터를 하나의 변수에 저장하기 위한 것!

let member = ['장하오', '성한빈', '리키', '김규빈', '한유진', '김태래', '석매튜', '박건욱', '김지웅'];
console.log(member);


/*
배열의 효용

함수는 input(매개변수)은 여러 개가 가능하나 output(return값)은 오직 하나의 값만 나온다.
하지만 return 값에 배열을 반환한다면 여러 개의 값을 반환할 수 있게 되는 것이다! 

*/

function myInfo(a,b,c) {
    return[a,b,c];
}

let name = prompt('이름을 입력해주세요.');
let age = prompt('나이를 입력해주세요.');
let hometown = prompt('거주지를 입력해주세요.');

console.log(myInfo(name, age, hometown));


function arr() {
    return [1,2,3,4,5];
}

console.log(arr());


