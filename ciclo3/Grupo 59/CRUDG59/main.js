

var app = new Vue({
    el: "#app",
    data: {
        message: 'Hola Vue',
        grupo: '59',
        id: 0,
        tareas: [],
        nuevaTarea:'',
    },
    methods: {
        agregarTarea(){
            this.tareas.push({
                id: this.id,
                nombre : this.nuevaTarea,
                estado : false,

            })
            this.nuevaTarea = '';
            this.id++
            //console.log(this.tareas)
        },
        cambiarEstado(index){
            if(this.estado){
                this.tareas[index].estado = false;
            }else{
                this.tareas[index].estado = true;
            }
            
        },
        eliminarTarea(index){
            this.tareas.splice(index,1);
            
        }

    }
    
})
