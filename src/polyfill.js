// js standard library에 등록되어있으나 브라우저나 node.js에서 구현되지 않은 기능을 미리 써볼 수 있도록 만들어진 것.

// @ts-check
require('core-js')


const origin = 'abcabc123'
const changed = origin.replaceAll('abc','123')
console.log(changed)

function sleep(duration){
    return new Promise(resolve=>{
        console.log('sleep start')
        setTimeout(()=>{
            console.log('sleep done', duration)
            resolve(duration)
        },duration)
    })
}

function alwaysreject(){
    return new Promise((resolve,reject)=>{
        reject()
    })
}

Promise.allSettled([
    sleep(1000),
    sleep(1500),
    sleep(2000),
    alwaysreject()
])
.then((value)=>[
    console.log('all done', value)
])
