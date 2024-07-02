let timestamp = Date.now();     // 현재 시간을 타임스탬프 형식으로 표시
let now = new Date();           // 현재 시간을 Date 객체로 표시
let ms = now.getTime();         // now 의 시간을 밀리초 타임스탬프로 변환
let iso = now.toISOString();    // now 의 시간을 표준 형식의 문자열로 변환

console.log(`현재 시간을 타임스탬프 형식으로 표시 : ${timestamp}`);
console.log(`현재 시간을 Date 객체로 표시 : ${now}`);
console.log(`현재 시간을 밀리초 타임스탬프로 변환 : ${ms}`);
console.log(`현재 시간을 표준 형식의 문자열로 변환 : ${iso}`);
