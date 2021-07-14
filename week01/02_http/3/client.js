const net = require("net");
// const { resolve } = require("path/posix");

class Requset {
    constructor(options) {
        this.method = options.method || "GET";
        this.host = options.host;
        this.port = options.port || 80; // http协议的默认端口是80
        this.path = options.path || "/";
        this.body = options.body || {};
        this.headers = options.headers || {};
        if (!this.headers["Content-Type"]) {
            this.headers["Content-Type"] = "application/x-www-form-urlencoded";
        }
        if (this.headers["Content-Type"] === "application/json")
            this.bodyText = JSON.stringify(this.body);
        else if (this.headers["Content-Type"] === "application/x-www-form-urlencoded")
            this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&');

        this.headers["Content-Length"] = this.bodyText.length;
    }
    send(connection) {
        // 在request构造器中收集必要的信息之后，设计一个send函数把请求真实发送到服务器
        // send函数应该是异步的，所以应该返回promise
        return new Promise((resolve, reject) => {
            const parser = new ResponseParser;
            if (connection) {
                connection.write(this.toString());
            } else { // 如果参数没有传的话，会通过createConnection创建一个新的TCP连接
                connection = net.createConnection({
                    host: this.host, // 根据
                    port: this.port
                }, () => {
                    connection.write(this.toString());
                })
            }
            connection.on('data', (data) => {
                console.log(data.toString());
                parser.receive(data.toString());
                if (parser.isFinished) {
                    resolve(parser.response);
                    connection.end(); // 最后关闭connection
                }
            });
            connection.on('error', (err) => {
                reject(err);
                connection.end();
            });
        });
    }

    toString() {
            return `${this.method} ${this.path} HTTP/1.1\r
${Object.keys(this.headers).map(key => `${key}: ${this.headers[keys]}`).join('\r\n')}\r
\r
${this.bodyText}`
    }
}

class ResponseParser { //逐步接受response文本，并经行分析
    constructor() {}
    receive(string) {
        for (let i = 0; i < string.length; i++) {
            this.receiveChar(string.charAt(i));
        }
    }
    receiveChar(char) {
        // 状态机代码

    }
}

void async function() {
    let request = new Request({
        method: "POST", // HTTP的request line
        host: "127.0.0.1", // 来自IP层
        port: "8088", // 来自TCP层
        path: "/", // HTTP的路径
        headers: {
            ["X-Foo2"]: "customed"
        },
        body: {
            name: "winter"
        }
    });
    let response = await request.send();

    console.log(response)
}();