Vue.component('tareas', {
    template: `
    <div> 
        <div class="mt-3 container" v-for="(item, index) of tareas">
            <div role="alert" :class="['alert', item.estado ? 'alert-success': 'alert-danger']">
                <div class="d-flex justify-content-between align-items-center">

                    <div class="">
                        {{index}}. {{ item.nombre }}
                    </div>
                    <div class="">
                        {{item.estado}}
                    </div>
                    <div>
                        <button class="btn btn-success btn-sm" @click="editarTarea(index)">
                            OK
                        </button>
                        <button class="btn btn-danger btn-sm" @click="eliminarTarea(index)">X</button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            tareas: [],
            nuevaTarea: '',
        }
    },
    methods: {
            agregarTarea : function(){
                // console.log(this.nuevaTarea);
                this.tareas.push({
                    nombre: this.nuevaTarea,
                    estado: false
                });
                this.nuevaTarea = "";
                localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
            },
            editarTarea : function(index){
                this.tareas[index].estado = true;
                localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
            },
            eliminarTarea : function(index){
                this.tareas.splice(index, 1);
                localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
            }
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if (datosDB === null){
            this.tareas = []
        }else{
            this.tareas = datosDB
        }
        console.log(datosDB);
    }
})

const app = new Vue({
    el : '#app',
    data: {
        titulo: 'Tareas con Vue',
        tareas: [],
        nuevaTarea: '',
    },

    methods:{
        agregarTarea : function(){
            console.log(this.nuevaTarea);
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = "";
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        editarTarea : function(index){
            this.tareas[index].estado = true;
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        eliminarTarea : function(index){
            this.tareas.splice(index, 1);
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if (datosDB === null){
            this.tareas = []
        }else{
            this.tareas = datosDB
        }
        console.log(datosDB);
    }
})