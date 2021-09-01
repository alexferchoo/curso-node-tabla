const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');


    
console.clear();
//const base = 1;

//console.log(process.argv);
//console.log(argv);
//console.log('base: yargs',argv.base);

/*
const [ , , arg3 = 'base=5' ] = process.argv;
const [ , base = 5] = arg3.split('=');
console.log(base);
*/
//console.log(argv.b);


crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err));
