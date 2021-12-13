const fs = require('fs');
const path = require('path');


module.exports = {
    products: JSON.parse(fs.readFileSync(path.join(__dirname, "/productos.json"), "utf-8")),
    writeProductsJSON: (dataBase) => {
        fs.writeFileSync(path.join(__dirname, "../Datos/productos.json"), JSON.stringify(dataBase), "utf-8")
    }
}