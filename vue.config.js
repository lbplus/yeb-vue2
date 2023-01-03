let proxyObj = {};

proxyObj['/'] = {
    //wbsocket
    ws: false,
    //  目标地址
    target: 'http://192.168.1.109:80',
    //  发送请求头host会被设置target
    changeOrigin: true,
    //  不重写请求地址
    pathWewrite: {
        "^/": '/',
    }
}

proxyObj['/ws'] = {
    ws: true,
    target: 'ws://192.168.1.109:80'
};

//前端的访问端口
module.exports = {
    devServer: {
        host: "0.0.0.0",
        port: 80,
        proxy: proxyObj,
    }
}