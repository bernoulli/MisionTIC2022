

var app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Hola grupo 70',
        grupo: 'G70',
        tareas : [],
        id: 0,
        nuevaTarea : ''
    },
    methods: {
        agregarTarea(){
            //console.log(this.nuevaTarea)
            this.tareas.push({
                id : this.id,
                nombre : this.nuevaTarea,
                estado : false, 
                
            })
            this.id++;
            this.nuevaTarea = '';
            console.log(this.tareas)
        },
        editarTarea(index){
            //console.log('editando..'+ index)
            this.tareas[index].estado = true;
        },
        eliminarTarea : function(index){
            console.log("entra a eliminar");
            this.tareas.splice(index, 1)

        }

    } 

})