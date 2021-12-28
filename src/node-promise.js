/* eslint-disable node/no-unsupported-features/node-builtins */
const fs = require('fs')

function readfileInPromise (fileName){
    return new Promise((resolve, reject)=>{
        fs.readFile(fileName, 'utf-8',(error, value)=>{
            if(error){
                reject(error)
            }
            else{
                resolve(value)
            }
        })
    })
    
}

readfileInPromise('.prettierrc')
.then(value=>{
    console.log('value :',value)
})

fs.promises.readFile('.prettierrc', 'utf-8')
.then(value=>{
    console.log('value from node',value)
})

async function main(){
    try{
        const result = await fs.promises.readFile('.prettierrc', 'utf-8')
        console.log(result)
    } catch(error){
        console.log('error',error)
    }
    

}

main()