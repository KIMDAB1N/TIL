// 함수 (function) : `하나의 로직을 재실행 할 수 있도록 하는 것`으로 `코드의 재사용성`을 높여준다.
// 재사용성이 높아지면 코드의 유지보수가 용이해지고, 가독성이 좋아진다.
// 즉, 함수를 좋은 부품으로 이용하면 되는거야~


function numbering() {
    let i = 0;
    while (i < 10) {
        document.write(i + "<br />");
        i += 1;
    }
}

numbering();