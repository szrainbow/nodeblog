const { GetList } = require('./controller/blog')
const { SuccessModel,ErrotModel } = require('../model/baseModel')

const handleBlogRouter = (req,res)=>{
    const method = req.method
    console.log(req.query)
    console.log(req.path)
    if (method == "GET" &&req.path=="/api/blog/list"){
        
        const author = req.query["author"] ||""
        const keyword = req.query["keyword"]||""
        const GetListData =GetList(author,keyword)
        return new SuccessModel(GetListData)
        
    }
    if (method == "GET" && req.path == "/api/blog/detail") {
        return {
            mes: "这是获取博客详情接口"
        }
    }
    if (method == "POST" && req.path == "/api/blog/new") {
        return {
            mes: "这是新建博客接口"
        }
    }
    if (method == "POST" && req.path == "/api/blog/update") {
        return {
            mes: "这是修改博客列表接口"
        }
    }
    if (method == "POST" && req.path == "/api/blog/del") {
        return {
            mes: "这是删除博客列表接口"
        }
    }

}
module.exports = handleBlogRouter