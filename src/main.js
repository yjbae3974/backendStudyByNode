// @ts-check

// formatting, Linting formating은 미적인거, linting은 혹여나 에러가 날 수 있는 것들.
// formatting: Prettier 선호.
// linting: ESLint
// typeChecking: Typescript

// 항상 lock파일을 커밋해줘야 협업하는 사람끼리 패키지 버전문제가 안생긴다.

const http = require('http');

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.end('Hello!')
})

const PORT = 4000;

server.listen(PORT,()=>{
    console.log('The server is listening at',PORT);
})