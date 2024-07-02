// 객체(Object) : 배열은 인덱스로 숫자를 사용했지만, 객체는 인덱스로 문자를 사용할 수 있다. (이게 배열과 객체의 눈에 보이는 차이점!)

// 객체의 생성
let kimdabin = {
    'gender' : '여자',
    'age' : 24,
    'hometown' : '전북 부안군'
}

console.log(kimdabin);
console.log(kimdabin.gender);
console.log(kimdabin.age);
console.log(kimdabin.hometown);



// 다른 방법으로 객체 생성하는 법
let zhanghao = new Object();
zhanghao['gender'] = '남자';
zhanghao['age'] = 25;
zhanghao['hometown'] = '중국 푸젠성';

console.log(zhanghao);
console.log(zhanghao['gender']);
console.log(zhanghao['age']);
console.log(zhanghao['hometown']);

