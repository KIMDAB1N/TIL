// 객체를 다루는 법 (얘도 반복문을 이용해서~!)

let kdb = {
    'gender' : '여자',
    'age' : 24,
    'hometown' : '전북 부안군',
    'univ' : '한서대학교',
    'major' : '항공소프트웨어공학'
}

// for ~ in
for (i in kdb) {    // i : key , kdb : 객체     즉, kdb 객체의 키를 다 돌면서 반복해봐 ~
    console.log(`${i} (key) : ${kdb[i]} (값)`);     // i가 key 이므로 'gender', 'age', 'hometown', ... 이고 kdb[i]의 값이 각 키에 해당하는 값들을 의미한다.
    document.write(`<ul><li>${i} (key) : ${kdb[i]} (값)</li></ul>`)
}




// 객체에 담길 수 있는 것
// 1. 객체
let grades = {
    'list' : {'kimdabin' : 1026, 'zhanghao' : 725, 'sunghanbin' : 613}      // grades 객체 안에 'list' 라는 키에 객체가 담겨있는 상태
}
console.log(grades['list']);    // grades 객체 안에 'list' 키에 할당된 객체 확인  {kimdabin: 1026, zhanghao: 725, sunghanbin: 613}
console.log(grades['list']['kimdabin']);    // grades 객체 안에 list 객체의 특정 키('kimdabin')의 값 확인  1026

// 2. 함수
grades = {
    'show' : function() {       // grades 객체 안에 'show' 라는 키에 함수가 담겨있는 상태
        alert('Hello~');
    }
}
grades['show']();       // 일반적인 함수를 호출하는 것처럼 괄호를 붙여 호출하면 된다.





/*
this : JS에서 이미 정해져있는, 약속되어 있는 변수

그래서 this가 뭐냐? 
-> 함수가 속해있는 객체를 가리키는 변수이다.

*/

// 즉, 아래의 예시의 경우 this가 속해있는 함수는 'sayHello' 이고 함수가 속해있는 객체는 'obj01' 이므로, this는 'obj01' 을 가리킨다.
obj01 = {
    'myList' : {'kbs' : 1028, 'lhj' : 605, 'kdb' : 1026, 'kyb' : 1009},
    'sayHello' : function() {       // grades 객체 안에 'show' 라는 키에 함수가 담겨있는 상태
        alert('Hello');
        console.log(this.myList);       // this 가 obj01을 가리키므로 obj01의 myList 키의 값을 의미한다.    {kbs: 1028, lhj: 605, kdb: 1026, kyb: 1009}

        for (let name in this.myList) {     // 'name' 이라는 이름의 키로 myList를 싹 다 돌아라 !
            console.log(name, this.myList[name]);   // 키와 해당 키에 해당하는 값을 출력해라
        }
    }
}

obj01['sayHello']();  


