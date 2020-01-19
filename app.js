// const http = require("http")

// const server = http.createServer((req,res)=>{
//     if(req.method=="POST"){
//         console.log("content-type",req.headers["content-type"])
//         //接收数据
//         let postdata=""
//         req.on("data",chunk=>{
//             postdata+=chunk.toString()
//         })
//         req.on("end", chunk => {
//             console.log(postdata)
//             res.end("hello world!")
//         })
//     }
// })
// server.listen(8000)
// console.log("ok")