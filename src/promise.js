// promise는 비동기 연산이 종료된 이후의 결과값.
// promise는 한 상태로 결정나면 더이상 실행되지 않음.
// @ts-check

/* eslint-disable */

// new Promise((resolve, reject)=>{
//     console.log('Inside promise')
//     reject(new Error('First reject'))   //둘중 먼저 실행한 것ㅇ로 값이 결정남.
//     resolve('first resolve')
// }).catch(error =>{
//     console.log('error',error)
// }).then((value)=>{
//     console.log('inside first then')
//     console.log('value', value)
// })
function returnPromiseForTimeout(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(Math.random())
            console.log('After resolve')
        },1000)
    })
}

returnPromiseForTimeout()
.then((value)=>{
    console.log('value',value)
    return returnPromiseForTimeout()
})
.then(value=>{
    console.log('value',value)
    return returnPromiseForTimeout()
})
.then(value=>{
    console.log('value',value)
    return returnPromiseForTimeout()
})


