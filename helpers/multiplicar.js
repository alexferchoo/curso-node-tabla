const fs = require('fs');
const colors = require('colors');

/*const crearArchivo = (base = 5) => 
{
    let salida = '';

    salida += '===========================\n';
    salida += `     TABLA DEL: ${base}   \n`;
    salida += '===========================\n';
    for (var i = 1; i <= 10; i++) 
    {
        salida += `${base} X ${i} = ${i*base}\n` ;
    }
    console.log(salida);
    fs.writeFileSync(`tabla-${base}.txt`,salida);
    console.log(`archivo tabla-${base}.txt creado`);
}

module.exports = 
{
    crearArchivo
}

const getEmpleado = (id) => 
{
    return new Promise((resolve,reject) =>
    {
        const empleado = empleados.find(e => e.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`);
    });
}*/

///////---------------------------
/*

const crearArchivo = (base = 5) => 
{
    return new Promise ((resolve,reject) => 
    {
        let salida = '';

        salida += '===========================\n';
        salida += `     TABLA DEL: ${base}   \n`;
        salida += '===========================\n';
        for (let i = 1; i <= 10; i++) 
        {
            salida += `${base} X ${i} = ${i*base}\n` ;
        }

        console.log(salida);
        fs.writeFileSync(`tabla-${base}.txt`,salida);
        resolve(`tabla-${base}.txt`);
    });
}
*/

const crearArchivo = async (base = 5, listar, hasta = 1) => 
{
    try
    {
        let salida= '' ,consola = '';
        salida += '=======================\n';
        salida += `     Tabla del ${base}  \n`;
        salida += '=======================\n';

        consola += '=======================\n'.rainbow;
        consola += `     Tabla del ${base}  \n`.trap;
        consola += '=======================\n'.rainbow;


        for(let i= 1; i<=hasta; i++)
        {
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.blue} ${i} ${'='.blue} ${base * i}\n`;
        }
        if(listar)
            console.log(consola);

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return `tabla-${base}.txt`;

    }catch(err)
    {
        throw err;
    }
}

module.exports = 
{
    crearArchivo
}
