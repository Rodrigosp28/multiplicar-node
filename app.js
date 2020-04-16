//requireds

const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch(comando) {

  case 'listar':
    listarTabla(argv.base,argv.limite);
    console.log('listar',argv.base);
  break;

  case 'crear':
    crearArchivo(argv.base,argv.limite).then((result) => {
      console.log(colors.green(result));
    }).catch((err) => {
      console.log(err);
    });
    console.log('crear',argv.base);
  break;

  default:
    console.log('comando no reconocido');

}

// console.log(argv);

//let base = 'a';

//console.log(process.argv);

let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

// console.log('limite',argv.limite);
// console.log(argv2);
