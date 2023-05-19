// Forma de hacer la funcion mas simplificada
module.exports = (fn) => (req, res, next) => fn(req, res).catch((err) => next(err));


// // recibe una funcion (fn)
// module.exports = (fn) => {
//     // Retrona una funcion
//     return function (req, res, next) {
//         // aca se captura el error de una funcion
//         fn(req, res).catch((err) => {
//             // debe de continuar al manejador de error
//             next(err);
//         })
//     };
// }