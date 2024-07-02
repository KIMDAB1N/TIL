// 값으로서의 함수 : JS에서는 함수도 객체다. 즉, 일종의 값이라는 뜻 !! 함수 자체가 값이 될 수 있다는 뜻이지~!

function a() { }
var a = function () { }

a = {
    b : function(){

    }
};

// a 라는 객체에 key 'b'에 value로 함수가 할당된 상태
// 즉, 키는 어떠한 값을 담고 있기 때문에 key는 변수의 역할을, value는 속성의 역할을 한다.

// 위처럼 객체의 속성으로 존재하는 함수를 `메서드`라고 한다.




// 함수는 '값'이기 때문에 다른 함수의 인자로 전달될 수도 있다!!

function cal(func, num) {
    return func(num);
}

function increase(num) {
    return num + 1;
}

function decrease(num) {
    return num - 1;
}

alert(cal(increase,1));
alert(cal(decrease,1));






// 함수는 함수의 리턴값으로도 사용될 수 있다.

function cal(mode) {
    let funcs = {
        'plus' : function(numA, numB){return numA + numB},
        'minus' : function(numA, numB){return numA - numB}
    }
    return funcs[mode];
}

alert(cal('plus')(2,1));
alert(cal('minus')(2,1));


