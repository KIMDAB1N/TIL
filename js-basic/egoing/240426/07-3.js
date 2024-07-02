// 함수의 출력

/*

function get_name(input_name) {
    return `입력된 이름은 ${input_name} 입니다. `;
}

let inputName = prompt('이름을 입력하세요.');
alert(get_name(inputName));

*/


function sum_func(a, b) {
    return a + b;
}

// prompt로 입력된 값은 문자열로 취급되기 때문에 number 형으로 형변환 ~
let x = Number(prompt('첫번째 숫자를 입력해주세요.'));
let y = Number(prompt('두번째 숫자를 입력해주세요.'));

alert(`두 수의 합은 ${sum_func(x,y)} 입니다.`);