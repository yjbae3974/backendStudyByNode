// @ts-check

// 프레임워크 없이 간단한 웹서버 만들어보기

/**
 * 블로그 포스팅 서비스
 * -로컬 파일을 데이터베이스로 활용할 예정(json)
 */

// const { reject } = require('core-js/fn/promise')
const http = require('http')

/**
 * Post
 * Get /posts
 * GET /posts/:id
 * POST / posts
 */
const { routes } = require('./api')
/**
 * res: response, 즉 응답
 * req: request, 즉 요청
 */
const server = http.createServer((req, res) => {
  async function main() {
    const route = routes.find(
      (_route) =>
        req.url &&
        req.method &&
        _route.url.test(req.url) &&
        _route.method === req.method
    )

    if (!req.url || !route) {
      res.statusCode = 404
      res.end('Not found')
      return
    }

    const regexResult = route.url.exec(req.url)

    if (!regexResult) {
      res.statusCode = 404
      res.end('Not found')
      return
    }
    /** @type {Object.<string,*> | undefined} */
    const reqbody = (req.headers['content-type'] === 'application/json' && 
    await new Promise((resolve, reject)=>{
        req.setEncoding('utf-8')
        req.on('data',data=>{
            try{
                resolve(JSON.parse(data))
            }
            catch{
                reject(new Error('Ill-formed json'))
            }
        })
    })) || undefined




    const result = await route.callback(regexResult, reqbody)
    res.statusCode = result.statusCode
    if (typeof result.body === 'string') {
      res.end(result.body)
    } else {
      res.setHeader('Content-type','application/json; utf-8')
      res.end(JSON.stringify(result.body))
    }
  }
  main()
})

const PORT = 4000

server.listen(PORT, () => {
  console.log('THe server is listening at ', PORT)
})
