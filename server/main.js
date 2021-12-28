// @ts-check

// 프레임워크 없이 간단한 웹서버 만들어보기

/**
 * 블로그 포스팅 서비스
 * -로컬 파일을 데이터베이스로 활용할 예정(json)
 */

const http = require('http')

// called jsdoc!!
/**
 * Represents the post
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */
const posts = [
    {
        id: 'my_first_post',
        title: 'My first post',
        content: 'Hello!'
    },
    {
        id: 'my_second_post',
        title: 'My second post',
        content: 'Hihhi'
    },
]
/**
 * Post
 * Get /posts
 * GET /posts/:id
 * POST / posts
 */

const server = http.createServer((req,res)=>{

    const POSTS_ID_REGEX = /^\/posts\/([a-zA-Z0-9-_]+)$/
    const regexresult = (req.url && POSTS_ID_REGEX.exec(req.url)) || undefined
    if(req.url === '/posts' && req.method === "GET"){
        const result = {
            posts: posts.map((post)=>({
            id: post.id,
            title: post.title
        })),
        totalCount: posts.length,}
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.end(JSON.stringify(result))
    }
    else if(regexresult){ // GET /posts/:id
        
            const postId = regexresult[1]
            const findPost = posts.find((_post) => _post.id === postId)
            if(findPost){
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(findPost))
            }else{
                res.statusCode = 404
                res.end('status not found')
            }
    }
    else if (req.url === '/posts' && req.method === 'POST'){
        req.setEncoding('utf-8')
        req.on('data',(data)=>{
            /** 
             * @typedef CreatePostBody
             * @property {string} title
             * @property {string} content
             */
            /** @type {CreatePostBody} */
            const resbody = JSON.parse(data)
            console.log(resbody)
            posts.push({
                id: resbody.title.toLowerCase().replace(/\s/g, '_'),
                title: resbody.title,
                content: resbody.content
            })
        })
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(posts))
    }
    else{
        res.statusCode = 404
        res.end('Not found')
    }

})


const PORT = 4000

server.listen(PORT, ()=>{
    console.log('THe server is listening at ', PORT)
})