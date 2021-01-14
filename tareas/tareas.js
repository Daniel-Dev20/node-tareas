const fs = require('fs');

let tareas = [];
//Fncion para guardar las tareas en fromato JSON
const guardarDB = () => {
    let data = JSON.stringify(tareas);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar la tarea');  
    });
}
//Funcion para mostrar las tareas del archivo JSON
const listarTareas = () => {
cargarDB();
return tareas;


}
//Cargar tareas
let cargarDB = () => {
    try {
        tareas = require('../db/data.json'); 
    } catch (error) {
        tareas = [];
    }
      
}

//Funcion para crear tareas

let crearTarea = (description) => {

        cargarDB();

    let tareasPorHacer = {
        description,
        completado: false
    };

    tareas.push(tareasPorHacer);
    guardarDB();
    return tareasPorHacer;
}

//Funcion para actualizar las tareas de la DB
const actualizar = (description, completado = true) => {
    cargarDB();
    let index = tareas.findIndex(tarea => tarea.description === description);
    if (index >=0){
        tareas[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

//Funcion para borrar tareas de la DB
const borrar = (description) => {
    cargarDB();
    let nuevasTareas = tareas.filter(tarea => tarea.description !== description);
    if (tareas.length === nuevasTareas.length ){
        return false;
    }else {
        tareas = nuevasTareas;
        guardarDB();
        return true;
    }
}



//Exportar funciones y modulos
module.exports = {
    crearTarea, 
    listarTareas, 
    actualizar,
    borrar
}