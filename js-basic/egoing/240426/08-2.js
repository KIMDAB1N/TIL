// 배열의 사용
// 배열의 진가는 반복문을 사용했을 때 비로소 나타난다 ~!

function get_members() {
    return ['kimdabin', 'DABANGZZANG', 'dAbIn'];
}

members = get_members();        // `members` 라는 변수에 get_members 함수를 할당했으므로, members 변수에는 함수의 리턴값인 배열이 할당되게 된다.
console.log(members);

let a = members[0];     // `a` 라는 변수에 배열의 첫번째 값 할당 (즉, kimdabin)
document.write(a.toUpperCase() + '<br />');    // toUpperCase() : 소문자 -> 대문자로 변경해주는 JS의 기본 제공 함수

document.write(members[1].toLowerCase() + '<br />');
document.write(members[2].toUpperCase() + '<br />');
document.write(members[2].toLowerCase() + '<br />');

// 이런 ..!! 내가 인덱스를 계속 지정하는건 불편하잖아 ...!!

let arr = ['jangjang', 'zhang', 'hao' ];
console.log(arr.length);        // 배열명.length : 배열의 길이를 알 수 있도록 JS에서 제공해주는 메서드

for(let i = 0; i < arr.length; i++) {       
    console.log(arr[i]);
    document.write(arr[i].toUpperCase() + '<br />');
}

