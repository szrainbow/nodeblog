const handleUserRouter = (req, res) => {
    const url = req.url
    const method = req.method
    const path = url.split("?")[0]
    if (method == "POST" && path == "/api/blog/user") {
        return {
            mes: "这是登录博客接口"
        }
    }
}
module.exports = handleUserRouter