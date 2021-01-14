

const opts = {
    description:{
        demand: true,
        alias: 'd'

    },
    completado:{
        default:true,
        alias: 'c'
    },
    borrar:{
       
        alias: 'b'
    }
    
}

const argv = require('yargs')
.command('crear', 'Crea una tarea para realizar', opts)
.command('actualizar', 'Actualiza una tarea', opts)
.command('borrar', 'Borra una tarea de la DB', opts).help().argv;

module.exports = {
    argv
}