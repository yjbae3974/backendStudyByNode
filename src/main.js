// @ts-check

// formatting, Linting formating은 미적인거, linting은 혹여나 에러가 날 수 있는 것들.
// formatting: Prettier 선호.
// linting: ESLint
// typeChecking: Typescript

// 항상 lock파일을 커밋해줘야 협업하는 사람끼리 패키지 버전문제가 안생긴다.
/*
이벤트 루프가 다음 콜백을 처리하려면 지금 처리하고 있는 콜백의 실행이 완전히 끝나야함.
call stack이 완전히 빌때까지 처리함.
callback queue: 맨처음 들어온게 맨 처음 나감. 콜백큐(메세지 큐)는 앞으로 실행할 콜백(함수와 그 인자)들을 쌓아두는 큐입니다.
콜백은 브라우저나 node가 어떤 일이 발생하면 메인스레드에 이를 알려주기 위해 사용됨. 이벤트는 파일처리의 완료, 네트워크 작업의 완료, 타이머 호출 등이 존재.

*/

// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.end('Hello!')
// })

// const PORT = 4000;

// server.listen(PORT,()=>{
//     console.log('The server is listening at',PORT);
// })

setInterval(()=>{
    console.log('HEY');
    while(true){    // 계속 돌아가기 떄문에 콜스택이 절대 비지 않음. 이 경우를 event loop를 block한다고 함.
        console.log('running while loop')
    }
},1000);