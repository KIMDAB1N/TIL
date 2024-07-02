// 배열의 제어

// 배열의 조작

// 1. 한 개의 데이터 추가 -> push() : 배열에 원소를 추가하기 위해 JS에서 기본적으로 제공하는 내장 함수 
let arr = ['zhang', 'sung', 'ricky', 'kim'];
arr.push('han');    // `han` 이라는 원소 밀어 넣기 ~!
console.log(arr);       // ['zhang', 'sung', 'ricky', 'kim', 'han']


// 2. 여러 개의 데이터 추가 -> concat([배열]) : 배열에 여러 개의 원소를 추가하기 위해 JS에서 기본적으로 제공하는 내장 함수
// concat은 인자가 배열이기 때문에 리턴해서 값을 넣어줘야함.
// 따라서 단순히 배열명.concat([배열]) 에서 끝나지 않고 이 값을 변수에 넣어줘야한다~
arr = arr.concat(['park', 'matthew']);
console.log(arr);       // ['zhang', 'sung', 'ricky', 'kim', 'han', 'park', 'matthew']


// 3. 배열의 시작점에 테이터 추가 -> unshift() : 인자로 전달한 값을 배열의 첫번째 원소로 추가하고 배열의 인덱스를 1씩 증가시킨다.
arr.unshift('zb1');
console.log(arr);       // ['zb1', 'zhang', 'sung', 'ricky', 'kim', 'han', 'park', 'matthew']


// 4. 배열의 중간에 데이터 추가 -> splice() : 배열의 특정 구간을 추출하거나, 특정 구간에 특정배열을 추가한다. (파이썬의 슬라이스랑 비슷한듯?)
// 배열명.splice(index,howmany, 인자1, 인자2 ...) 
// index : 필수. 배열에 추가할 특정 배열의 위치를 가르킨다.
// howmany : 필수. index를 포함하여 제거할 원소들의 개수? 이다. 
console.log(arr.splice(4, 3));       // ['kim', 'han', 'park'] 해당.  ['zb1', 'zhang', 'sung', 'ricky', 'matthew']
console.log(arr.splice(5, 6, '제', '로', '베', '이', '스', '원'));     // 5번째 인덱스부터 원소 6개 추가할게~ 추가할 원소는 '제''로''베''이''스''원'
// 결과 : ['zb1', 'zhang', 'sung', 'ricky', 'matthew', '제', '로', '베', '이', '스', '원']


// 5. 배열의 데이터 제거 -> pop() : 배열의 끝에서부터 원소를 제거한다.
console.log(arr);       // ['zb1', 'zhang', 'sung', 'ricky', 'matthew', '제', '로', '베', '이', '스', '원']
console.log(arr.pop());     // 원
console.log(arr);       // ['zb1', 'zhang', 'sung', 'ricky', 'matthew', '제', '로', '베', '이', '스']


// 6. 배열의 데이터 제거 -> shift() : 배열의 앞에서부터 원소를 제거한다.
console.log(arr.shift());       // zb1
console.log(arr);       // ['zhang', 'sung', 'ricky', 'matthew', '제', '로', '베', '이', '스']




// 7. 정렬 -> sort() : 배열을 사전식 순서로 정렬해준다.
let myArr = ['z', 'e', 'r', 'o', 'b', 'a', 's', 'e', 'o', 'n', 'e'];
console.log(myArr);     // ['z', 'e', 'r', 'o', 'b', 'a', 's', 'e', 'o', 'n', 'e']
console.log(myArr.sort());      // ['a', 'b', 'e', 'e', 'e', 'n', 'o', 'o', 'r', 's', 'z']


// 8. 정렬(역순) -> reverse() : 배열을 역순으로 정렬해준다.
console.log(myArr.reverse());       // ['z', 's', 'r', 'o', 'o', 'n', 'e', 'e', 'e', 'b', 'a']


// 9. 근데~ JS에선 사전식을 기준으로 정렬 및 역정렬을 해주지만... 우리가 살다보면 다른 기준으로 정렬을 해야할때가 더 많잖아 ...
// 그럴 땐! 기준을 담은 function을 만들어서 sort() 함수에 인자로 넣어주면 된다.

// 나는 문자 중 g 보다 뒷 문자는 앞쪽에 앞 문자는 뒷쪽에 정렬하는 걸 만들어볼게

function gSort(arr) {
    arr = arr.sort();
    let newArr0 = [];
    let newArr1 = [];
    let newArr2 = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 'g') {
            newArr0.push(arr[i]);
        } else if (arr[i] > 'g') {
            newArr1.push(arr[i]);
        } else {
            newArr2.push(arr[i]);
        }
    }

    return newArr1.concat(newArr0, newArr2);
}

let charArr = ['a', 'd', 'e', 'g', 'q', 's', 'r', 'z'];
console.log(gSort(charArr));

// 하다보니 숫자 정렬이 이상함 ... 꼭 문자열을 따지는 것만 같음 ....  그래서 지피티한테 물어봤다~
// GPT : sort() 메서드는 기본적으로 문자열로 변환하여 정렬을 수행하므로 숫자 배열을 제대로 정렬하지 않을 수 있습니다. 
// 알파벳으로 바꿈
// 살다살다 이렇게 개비효율적인 코드는 첨본다 진짜

