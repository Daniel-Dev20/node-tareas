//Importamos la libreria de yargs
//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const tareas = require('./tareas/tareas');
const colors = require('colors');
//Codigo para obtener lo que se escribe desde la consola
const comando = argv._[0];


switch(comando){
    case 'crear':
        let tarea = tareas.crearTarea(argv.description);
        console.log(tarea);
        break;
    case 'listar':
        let lista = tareas.listarTareas();
        for(tareaLista of lista){
            console.log('======'.green);
            console.log(tareaLista.description);
            console.log('Estado', tareaLista.completado);
            console.log('====='.green);
        }
        console.log(lista);
        break;
    case 'actualizar':
        let actualizar = tareas.actualizar(argv.description, argv.completado);
        console.log(actualizar);
        break;
    case 'borrar':
        let borrado = tareas.borrar(argv.description);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
}