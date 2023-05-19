// res => Respuesta que se va a enviar
// estatusCode => El estatus code se se envia
// data => la informacion que se va a enviar
module.exports = (res, statusCode, data) => {
    res.status(statusCode).json({
        error: false,
        data: data,
    })
}