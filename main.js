// const http = require("http")
// const querystring = require("querystring")

// const server = http.createServer((req,res)=>{
//     const url = req.url;
//     const methods = req.method;
//     const path = url.split("?")[0];
//     const query = querystring.parse(url.split("?")[1])

//     //设置返回格式为JSON
//     res.setHeader("content-type","application/json")

//     const resData = {
//         url,
//         methods,
//         path,
//         query
//     }
//     if(req.method==="GET"){
//         res.end(JSON.stringify(resData))
//     }else if(req.method==="POST"){
//         let postData=""
//         req.on("data",chunk=>{
//             postData+=chunk.toString()
//         })
//         req.on("end",chunk=>{
//             resData.postData=postData
//             res.end(resData)
//         })
//     }
// })
// server.listen("8000")
// console.log("ok")