const handleUserRouter = require("./src/user")
const handleBlogRouter = require("./src/blog")
const queryString = require("querystring")

//设置
var serverHandle = function(req,res){
    res.setHeader("content-type","application/json")
    //获取path
    const url = req.url
    req.path = url.split("?")[0]
    req.query = queryString.parse(url.split("?")[1])

    const blogData = handleBlogRouter(req, res)
    const userData = handleUserRouter(req, res)
    // 博客路由
    console.log(0+"...."+req.path)
    console.log(1 + "...." +blogData)
    if(blogData){
        res.end(JSON.stringify(blogData))
        return
    }
    // 登录路由
    if(userData){
        res.end(JSON.stringify(userData))
        return
    }
    // 未命中路由，返回404
    res.writeHead(404, { "content-type": "text/html"})
    res.write("404 not found")
    res.end()   
}

module.exports=serverHandle

//env: process.env.NOOD_ENV