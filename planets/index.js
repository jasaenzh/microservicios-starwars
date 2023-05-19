const server = require('./src/server')
const { PORT_SERVER } = require("./src/config/envs")


async function main() {
    await server.listen(PORT_SERVER);
    console.log(`Servidor inicializado en el puerto ${PORT_SERVER}`)
}

main();