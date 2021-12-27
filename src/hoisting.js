// hoisting: 코드가 위로 끌려감.
/* 
console.log(x)
var x =1 이 코드가

var x
console.log(x)
x = 1
로 바뀌는 것.
function도 hoisting의 대상.
근데 변수는 초기화는 밑에 남아있는데, 함수는 초기화가 아니라 선언이기때문에, 함수 내용이 다 끌려옴.
*/

/*
자바스크립트에서의 변수에 어떤 값이 들어가는지 참조하는 방법: lexical scope. 안쪽에 있는건 바깥쪽에 접근할 수 있음.
그러나 var은 block scoping의 대상이 아님. let 과 const는 block scoping이 됨/
*/

