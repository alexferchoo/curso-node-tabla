const argv = require('yargs')
    .option('b',
        {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
    .option('l', 
        {
            alias: 'listar',
            type: 'boolean',
            describe: 'Listar la tabla',
            default: false
        })
    .option('h', 
        {
            alias: 'hasta',
            type: 'number',
            describe: 'Hasta donde va ir la tabla',
            default: 1
        })
    .check( (argv,options) => 
    {
        //console.log('yargs',argv)
        if(isNaN (argv.b))
        {
            throw 'La base tiene que ser un numero';
        }else if(isNaN (argv.h))
        {
            throw 'El hasta tiene que ser un numero';
        }
        return true;
    })
    .argv;

    module.exports = argv;