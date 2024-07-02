// 유효범위의 효용성

function a() {
    i = 0;      // 애도 let 을 안붙였으니 까 전역변수!
}

for(let i = 0; i < 5; i++) {        // i : 전역변수
    a();
    document.write(i);
}


// 전역변수의 사용
// 불가피하게 전역변수를 사용해야 하는 경우는 하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리하는 방법을 사용한다.

let MYAPP = {}      // 'MYAPP' 이라는 객체 선언

MYAPP.calculator = {        // MYAPP 객체 안에 'calculator' 라는 객체를 선언하고 해당 객체 안에 키와 값을 할당.
    'left' : null,
    'right' : null
}

MYAPP.coordinate = {        // MYAPP 객체 안에 'coordinate' 라는 객체를 선언하고 해당 객체 안에 키와 값을 할당.
    'left' : null,
    'right' : null
}

MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;

function sum() {
    return MYAPP.calculator.left + MYAPP.calculator.right;      // 10 + 20
}

document.write(sum());      // 30

/*
그냥 전역객체 자체를 사용하고 싶지 않으면 코드의 모든 내용을 하나의 함수로 묶고 바로 선언해버리면 된다.

예시 )
(function myFunc () {
    function a() {
        i = 0;      // 애도 let 을 안붙였으니 까 전역변수!
    }
    
    for(let i = 0; i < 5; i++) {        // i : 전역변수
        a();
        document.write(i);
    }
    
    
    // 전역변수의 사용
    // 불가피하게 전역변수를 사용해야 하는 경우는 하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리하는 방법을 사용한다.
    
    let MYAPP = {}      // 'MYAPP' 이라는 객체 선언
    
    MYAPP.calculator = {        // MYAPP 객체 안에 'calculator' 라는 객체를 선언하고 해당 객체 안에 키와 값을 할당.
        'left' : null,
        'right' : null
    }
    
    MYAPP.coordinate = {        // MYAPP 객체 안에 'coordinate' 라는 객체를 선언하고 해당 객체 안에 키와 값을 할당.
        'left' : null,
        'right' : null
    }
    
    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    
    function sum() {
        return MYAPP.calculator.left + MYAPP.calculator.right;      // 10 + 20
    }
    
    document.write(sum());      // 30
}());
*/
