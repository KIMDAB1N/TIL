// 조건문(conditional statement) : 주어진 조건에 따라서 애플리케이션을 다르게 동작하도록 하는 것~

/*
조건이 될 수 있는 값은 Boolean 으로 true 일 때 if문의 내용이 실행된다.
if(조건){
    내용 
}

else if 에서 else 는 앞의 조건이 실행되지 않았을 경우에만 실행되므로, 앞의 조건이 실행되었다면 else if 구문은 실행되지 않는다!
*/

// alert(prompt('당신의 나이는?'));    // 실행 순서 : prompt 실행 후 alert 실행~ 안쪽 괄호부터 실행하는겨~ 수학처럼 ~!

let id = prompt('아이디를 입력해주세요.');
if (id === 'dabangzzang') {
    let pw = prompt('비밀번호를 입력해주세요.');
    if(pw === '1234') {
        alert(`로그인 성공! ${id}님 환영합니다.🙌`);
    } else {
        alert('비밀번호가 일치하지 않습니다.');
    }
} else {
    alert('아이디가 존재하지 않습니다.');
}
