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
        return new Promise((resolve, reject) => {
            //...
        });
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