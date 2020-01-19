//一些http的相关配置文件
const http = require("http")
const querystring = require("querystring")
const post = 8000;
const serverHandle = require("../index.js")
const server = http.createServer(serverHandle)

server.listen(post)
console.log("ok")