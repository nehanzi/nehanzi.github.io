const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer(function(req, res){

    if (req.url === '/'){
        fs.readFile('../html/index.html', 'utf8', function(err, data){
            if (err){
                fs.readFile('../html/error.html', 'utf8', function(err, data){return res.end()})}
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
    })

    } else if (req.url === '/mlvr.html') {
        fs.readFile('../html/mlvr.html', 'utf8', function(err, data){
            if (err){
                fs.readFile('../html/error.html', 'utf8', function(err, data){return res.end()})}
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                    return res.end();
                
    })
            
} else if (req.url === '/projects.html') {
    fs.readFile('../html/projects.html', 'utf8', function(err, data){
        if (err){
            fs.readFile('../html/error.html', 'utf8', function(err, data){return res.end()})}
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            
})
        
} else {
    const fileLocation = `../public/${req.url}`
    const stream = fs.createReadStream(fileLocation)
    stream.on('open', function () {
        stream.pipe(res);
    })
    
    stream.on('error', function () {
        fs.readFile('../html/error.html', 'utf8', function(err, data){return res.end()})
        return res.end();
    })
}
});

server.listen(PORT, function(){
    console.log(`SERVER NOW RUNNING ON PORT ${PORT}`)
})

