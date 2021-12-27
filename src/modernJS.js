/* eslint-disable node/no-unsupported-features/es-syntax */
// ECMAScript:  보통 자바스크립트의 기술적인 발전을 논할때 쓰는 단어. 자바스크립트랑 동의어.

// let, const. hoisting 규칙이 없고, block scoping을 지원. 따라서 var보다 훨씬 예측가능한 코드를 짤 수 있게 해줌.
/* 
let은 레퍼런스가 바뀔 수 있고, const는 바뀔 수 없음. var와 달리 let, const는 같은 스코프 내에서 같은 변수를 두번 이상 정의할 수 없음. 
가능하다면 const만 쓰고, 필요한 경우에 let을 쓰고, var은 절대 쓰지 마라!
*/

/* Spread Syntax */
/* ... 이거.  남은 모든 배열의 원소를 ... 으로 가져올 수 있음. */

const a = [1,2,3,4,5];

const [head, ...rest] = a
console.log(head,rest);

const personalData = {
    email: 'kldjfds@dsf.com',
    password: '****',
}

const publicData = {
    nickname: 'foo',

}

const overrides = {
    email: 'fff@fff.com'
}

const shouldOverride = false

const user = {
    ...personalData,
    ...publicData,
    
     ...(shouldOverride
        ? overrides
        : null)

}

console.log(user);

function foo(head, ...rest){
    console.log(head)
    console.log(rest)
}

foo(1,2,3,4,5)