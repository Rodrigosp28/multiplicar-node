const fs= require('fs');
var colors = require('colors');


let listarTabla =(base, limite=10) => {

  console.log('============================='.green);
  console.log(`====tabla del ${base}========`.green);
  console.log('============================='.green);
  for(let i =1; i<=limite;i++){
    let valor = base * i;
    console.log(`${base} * ${i} = ${valor}\n`);
  }
}

let crearArchivo = (base, limite =10) =>{
  return new Promise((resolve,reject) => {

    if(!Number(base)){
      reject(`El valor introducido ${base} no es un numero`)
      return;
    }

    let data = '';
    let nombreArchivo ='';

    for(let  i =1; i<=limite; i++){
      let valor = base * i;
      data += `${base} * ${i} = ${valor}\n`;
    }
    nombreArchivo = `tabla-${base}.txt`;

    fs.writeFile(`tablas/${nombreArchivo}`,data,(error) => {
      if(error) reject(error);
      else
      resolve(nombreArchivo);
      //console.log(`el archivo ${nombreArchivo} ha sido creado`);
    });

  });
}

module.exports = {
  crearArchivo,
  listarTabla
}
