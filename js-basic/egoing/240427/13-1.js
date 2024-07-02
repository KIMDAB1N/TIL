// 유효범위(Scope) : 변수의 수명

let vscope = 'global';           // 전역변수

function fscope() {
    let vscope = 'local';           // 지역변수
    let lv = 'local variables';
    vscope = 'local22';       // let 을 안붙였지만 이 값은 지역변수를 겨냥한 것이다예~ 일단 같은 범위 내에 있는 것부터 찾아본다니까!! 즉, 이 코드로 인해 지역변수 fscope 의 값이 local22로 변경된다.
    alert(vscope);  
    alert(lv);      
}

fscope();    // 같은 함수 내에 지정된 vscope (지역변수) 값을 출력함~!

// 우선 순위 : 같은 함수 내에 있는 것 (지역변수) -> 함수 내에 없어? -> 그럼 함수 바깥에 있는 것 (전역변수) 호출 ~!

// alert(lv);      // 변수 'lv'는 fscope 함수에서 만들어진 변수이기 때문에 함수 바깥에선 쓸 수 없다.   Uncaught ReferenceError: lv is not defined

function fscope2() {          
    alert(vscope);      // global
}

fscope2();


// 함수 내에서 전역 변수와 동일한 이름의 변수를 만드는 것도 일종의 변수를 또 선언하는 것이다. let 붙여야함 !! 안붙이면 전역변수로 취급.

