const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require("http-proxy-middleware");
const { PORT_SERVER } = require("./src/config/envs")

const app = express();

app.use(morgan("dev"));

//Aca se configura el middleware http-proxy middleware
// target: A donde esta escuchando la aplicacion a la que se va a continuar el middleware
// changeOrigin: Le indica que a partir de ahi va a modificar los headers para para indicar que continue con el microservicio
app.use(
    "/characters",
    createProxyMiddleware({
        target: "http://characters:8001",
        changeOrigin: true,
        // pathRewrite: {
        //     "^/api": ""
        // }
    })
);

app.use(
    "/films",
    createProxyMiddleware({
        target: "http://films:8002",
        changeOrigin: true,
        // pathRewrite: {
        //     "^/api": ""
        // }
    })
);

app.use(
    "/planets",
    createProxyMiddleware({
        target: "http://planets:8003",
        changeOrigin: true,
        // pathRewrite: {
        //     "^/api": ""
        // }
    })
);


app.listen(PORT_SERVER, () => {
    console.log(`Gateway inicializado en el puerto ${PORT_SERVER}`)
});