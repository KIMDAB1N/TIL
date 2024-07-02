// 논리연산자

/*
1. &&(AND) : 좌항과 우항이 모두 true 여야 true 값이 반환된다.
const id = prompt('아이디를 입력해주세요.');
const pw = prompt('비밀번호를 입력해주세요.');

if (id === 'kimdabin' && pw === '1026') {
    alert(`로그인 성공! ${id}님 반갑습니다.🍀`);
} else {
    alert('아이디나 비밀번호가 틀립니다.');
}
*/


/*
2. ||(OR) : 좌항과 우항 둘 중 하나가 true여도 true 값이 반환된다. 
만약, true || true -> true 반환, false || false -> false 반환

const id = prompt('아이디를 입력해주세요.');
const pw = prompt('비밀번호를 입력해주세요.');

if((id === 'kimdabin' || id === 'dabin' || id === 'kim') && pw === '1111' ) {
    alert('인증되었습니다.');
} else {
    alert('인증 실패');
}
*/

/*
3. !(not) : 부정. Boolean의 값을 역전시킨다.
*/

