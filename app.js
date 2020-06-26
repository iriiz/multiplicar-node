const argv = require('./Config/yargs').argv;
//const colors = require('colors');
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./Multiplicar/Multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.blue(archivo)))
            .catch(e => console.log(`El valor introducido ${ base } no es un numero`));
        break;

    default:
        // console.log('Comando no reconocido');
}

//console.log(argv);

//console.log(process.argv);
//let argv2 = process.argv;
//console.log(argv);
//console.log(argv2);
//let parametro = argv[2];
//let base = parametro.split('=')[1]

//console.log('Limite', argv.limite);

//crearArchivo(base)
//.then(archivo => console.log(`Archivo creado: ${ archivo }`))
//.catch(e => console.log(`El valor introducido ${ base } no es un numero`));