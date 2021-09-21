
var app = new Vue({
    el: '#app',
    data : {
        mensaje : 'hola grupo 82',
        grupo : 'grupo 82',
        tareas : [],
        id : 0,
        nuevaTarea : ''
    },
    methods: {
        agregarTarea : function(){
            //console.log("entra a agregar")
            this.tareas.push({
                id : this.id,
                nombre : this.nuevaTarea,
                estado : false

            })
            this.id++;
            this.nuevaTarea = ''
               
        },
        cambiarEstado(index){
            console.log("entra a cambiar estado")
            this.tareas[index].estado = true
        },
        eliminarTarea(index){
            console.log("entra a eliminar tarea")
            this.tareas.splice(index,1)
        }
    }
})