const fs = require("fs");
const crearArchivo = async (base = 1,listar = false, hasta = 10) => {
  console.clear();
  try {
    let salida = `===================================
        TABLA DEL: ${base}
===================================
`;
    for (let i = 1; i <= hasta; i++) {
      salida += `${base}x${i}=${base * i}\n`;
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    if(listar) console.log(salida);
    return `Tabla del: ${base} OK!`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
