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
    send() {
        // 在request构造器中收集必要的信息之后，设计一个send函数把请求真实发送到服务器
        // send函数应该是异步的，所以应该返回promise
        return new Promise((resolve, reject) => {
            const parser = new ResponseParser;
            resolve("");
        });
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