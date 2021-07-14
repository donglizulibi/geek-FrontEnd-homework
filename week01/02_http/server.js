const http = require('http')

http.createServer((request, response) => { // 调用http里面createServer的方法
    let body = []; // 接受request里面的三个事件
    request.on('error', (err) => {
        console.error(err); // error的部分直接打印
    }).on('data', (chunk) => {
        body.push(chunk.toString()); // data存在一个body的数组里面
    }).on('end', () => {
        body = Buffer.concat(body).toString(); // 把数组里的内容拼起来
        console.log('body:', body);
        response.writeHead(200, { 'Content-Type': 'text/html' }); // 请求头
        response.end(' Hello World\n'); // 里面先随便写一段html代码，后期可以改
    });
}).listen(8088);

console.log('server started');