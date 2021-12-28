// transpile: 코드를 한 언어에서 다른 언어로 변환하는 작업. 신규 언어 스펙에서 구형언어 스펙으로 트랜스파일을 할 떄 주로 사용.
// 주 트랜스파일러는 babel, tsc, esbuild가 있음.

const objs = [
  {
    foo: {
      bar: 1,
    },
  },
  {
    foo: {
      bar: {
          baz: 1
      },
    },
  },
  {
    foo: {},
  },
  {},
]
// console.log(
//     objs.map((obj)=>{
//         const {foo} = obj
//         if(foo){
//             const {bar} = foo
//             if(bar){
//                 return bar.baz
//             }
//         }
//         return undefined
//     })
// )

console.log(objs.map((obj)=>obj.foo?.bar?.baz))