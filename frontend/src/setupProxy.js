const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config()

module.exports = function(app) {
    console.log("asdfa" + process.env.BACKEND);
    app.use(
        '/api',
        createProxyMiddleware({
            target: process.env.BACKEND,
            changeOrigin: true,
        })
    );
};