

var app = new Vue({
    el : '#app',
    data : {
        mensaje : 'Hola grupo 74',
        tareas : [],
        nuevaTarea : '',
        id : 0,
    },
    methods: {
        agregarTarea: function(){
            //console.log(this.nuevaTarea)
            this.tareas.push({
                id : this.id,
                nombre : this.nuevaTarea,
                estado : false,

            })
            this.id++; 
            this.nuevaTarea = ''
           
        },
        cambiarEstado(index){
            //console.log("entra index: " +  index)
            
            if(!this.estado){
                this.tareas[index].estado = true;
            }else{
                this.tareas[index].estado = false;
            }
            
        },
        eliminarTarea(index){
            console.log(index)
            if(this.tareas[index]!=null){
                this.tareas.splice(index,1);
                alert("Se eliminó la tarea con id: " + index)
            }
            
        },
        imprimirTabla(){
            
            var t = document.getElementById('tabla');
            print(t);
        }
    }

})