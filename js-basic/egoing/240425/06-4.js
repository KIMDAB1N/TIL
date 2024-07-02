// 반복문의 제어

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        document.write('i의 값이 5가 됐으므로 반복을 중지합니다.');
        break;

        // document.write('i값 5는 건너뛰고 진행할게요~! <br />');
        // continue;
    }
    document.write(`i = ${i} <br />`);
}

// 개인적의견 ... 조건 먼저 쓰고 실행하고 싶은 내용을 if 문 뒤에 쓰자 !!


/*
즉, break는 즉시 반복문을 중단하지만
    continue는 해당값에서 중지한 후 계속 실행한다. keep going~
*/

