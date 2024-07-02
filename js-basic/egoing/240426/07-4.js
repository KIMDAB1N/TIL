// 함수의 정의 방법

// 1) 기존의 함수 정의 방법
function numberingOrigin() {
    let i = 0
    while (i < 10) {
        document.write(i + '<br />');
        i += 1;
    }
}

numberingOrigin();




// 2) 변수에 함수를 할당하는 방법
let numbering = function () {
    i = 0;
    while (i < 10) {
        document.write(i + '<br />');
        i += 1;
    }
}

numbering();

// 위의 함수는 `numbering` 이라는 이름의 변수에 함수를 할당한 형태이다.
// 따라서 변수 이름 `numbering` 에 함수를 호출하듯 ()를 붙이면 우리가 알던 함수의 호출마냥 함수 호출이 가능하다.




// 3) 익명함수 (일회성으로 사용할 때!) : 함수 자체를 괄호로 묶고 함수 호출하듯 바로 옆에 ()를 붙이면 함수가 실행된다. 
(function () {
    let i = 0
    while (i < 10) {
        document.write(i + '<br />');
        i += 1;
    }
})();