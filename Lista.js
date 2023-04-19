let tareas=["Jugar xbox","realizar tarea de programación","nadar"];
// INSERTAR CÓDIGO PARA AGREGAR ELEMENTO AL ARREGLO
tareas.push("Ir al cine","Estudiar para Ing. de SW II");

console.log("Mi lista de actividades");
console.log("************"); 
for(let i = 0; i < tareas.length; i++){
    console.log((i+1)+ "."+"-" + tareas[i]); 
}

//Baya