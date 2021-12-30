const http = require('http')

const server = http.createServer((req, res) =>{
    res.write('welcome\n')
    res.write('welcome Nawal benghina\n')
    res.write('bonjour \n')

    res.end()
})

server.listen(5000, ()=> console.log('server running'))