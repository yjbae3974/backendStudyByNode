async function sleep(duration){ //promise를 돌려주는 함수.
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(undefined)
        },duration)
    })
    
}

async function main(){
    console.log('first')
    await sleep(1000)
    console.log('second')
    await sleep(2000)
    console.log('third')
    await sleep(3000)
    console.log('fourth')
}
main()