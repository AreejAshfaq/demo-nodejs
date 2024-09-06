const http = require("http");


const server = http.createServer(
 (req, res)   => {
    switch(req.url) {
        case "/": res.end("areej here")
            break;
        case "/about": res.end("Shabana is frnd")
            break;
        default: res.end("Page is not found 404")
    }
 }
)

server.listen(4545, () => console.log("Server is Listning...."))

