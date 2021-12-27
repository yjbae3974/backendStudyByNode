// closure = function + environment

const { count } = require("console");

// closure은 함수가 하나 생길 때 마다 하나씩 생김. environment는 함수 자신을 둘러싼 접근할 수 있는 모든 스코프를 뜻함.

function and(x){
    return function print(y){
        return x + ' and ' + y;
    }
}

const saltAnd = and('salt')
console.log(saltAnd('pepper')) // salt and pepper
console.log(saltAnd('sugar'))   // salt and sugar

let numCounters = 0;

function getCounter(){
    numCounters += 1;

    var result = {
        count: count,
        total: 0
    }
    function count(){
        result.total +=1;
    }

    return result;
}

var counter = getCounter(); // count에 클로저가 생김. result를 바인딩함. 클로저는 함수가 선언될때 마다 새로 생김.
counter.count();    // 실행할 때마다 count를 실행.
counter.count();

console.log(counter.total)

var counterA = getCounter();
counterA.count();
counterA.count();
var counterB = getCounter();
counterB.count();

console.log(counterA.total, counterB.total, numCounters);
