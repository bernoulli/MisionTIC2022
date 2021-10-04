<template>
    <div class="container">

        <h1>Notas</h1>

        <b-alert 
        :show="dismissCountDown" 
        dismissible
        :variant="mensaje.color" 
        @dismissed="dismissCountDown=0" 
        @dismiss-count-down="countDownChanged">
        {{mensaje.texto}}
        </b-alert> 

        <form @submit.prevent="editarNota(notaEditar)" v-if="editar">
            <h3>Editar Nota</h3>
            <input type="text" placeholder="Ingrese un Nombre" class="form-control my-2" v-model="notaEditar.nombre">
            <input type="text" placeholder="Ingrese una descripcion" class="form-control my-2" v-model="notaEditar.descripcion">
            <b-button class="btn-success my-2 mx-2" type="submit">Editar</b-button>
            <b-button class="my-2" type="submit" @click="editar = false">Cancelar</b-button>
        </form>

        <form @submit.prevent="agregarNota(nota)" v-if="!editar">
            <h3>Agregar nueva Nota</h3>
            <input type="text" placeholder="Ingrese un Nombre" class="form-control my-2" v-model="nota.nombre">
            <input type="text" placeholder="Ingrese una descripcion" class="form-control my-2" v-model="nota.descripcion">
            <b-button class="btn-success my-2" type="submit">Agregar</b-button>
        </form>

        <table class="table"> <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th> <th scope="col">Fecha</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
            <tbody>
                <tr v-for="(item, index) in notas" :key="index"> <th scope="row">{{item._id}}</th> 
                    <td>{{item.nombre}}</td> 
                    <td>{{item.descripcion}}</td> 
                    <td>{{item.date}}</td>
                    <td>
                
                        <b-button class="btn-danger btn-sm mx-2"
                        @click="eliminarNota(item._id)">Eliminar</b-button> 
                        <b-button class="btn-warning btn-sm mx-2"
                        @click="activarEdicion(item._id)">Editar</b-button> 
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  data() {
        return {
            notas: [], 
            mensaje: {color: 'success', texto: ''}, 
            dismissSecs: 5,
            dismissCountDown: 0,
            nota: {nombre:"",descripcion:""},
            //agregar: true,
            editar:false,
            notaEditar: {},
        };
    
    },
    created(){
        this.listarNotas(); 
    },
    methods:{
        listarNotas(){
            //importante el nombre como este en el server
            this.axios.get('/nota') 
            .then((response) => {
                console.log(response.data)
                this.notas = response.data; 
            })
                .catch((e)=>{ 
                    console.log(e.response);

            }) 
        },
        agregarNota(item){
            this.axios.post('/nueva-nota', this.nota) 
            .then(res => {
                // Agrega al inicio de nuestro array notas
                //this.notas.unshift(res.data);
                // Alerta de mensaje
                this.notas.push(res.data)
                this.nota.nombre="";
                this.nota.descripcion="";
                this.mensaje.texto = 'Nota Agregada!' 
                this.mensaje.color = 'success';
                this.showAlert();
            })
            .catch( e => {
                console.log(e.response);
            })
            
        },
        
        eliminarNota(id){
            this.axios.delete(`nota/${id}`) 
            .then(res => {
                let index = this.notas.findIndex( item => item._id === res.data._id )
                this.notas.splice(index, 1);
                this.mensaje.color = 'success';
                this.mensaje.texto = 'Nota Eliminada!' 
                this.showAlert();
                })
            .catch( e => {
                console.log(e.response); 
            })
        },
        activarEdicion(id){
            this.editar = true; 
            this.axios.get(`/nota/${id}`)
                .then(res => { 
                    this.notaEditar = res.data;
                })
                .catch(e => {
                    console.log(e.response); 
                })
        },
        editarNota(item){
            this.axios.put(`/nota/${item._id}`, item) 
                .then(res => {
                    const index = this.notas.findIndex( itemNota => itemNota._id === this.notaEditar._id);
                    this.notas[index].nombre = this.notaEditar.nombre;
                    this.notas[index].descripcion = this.notaEditar.descripcion;
                    this.mensaje.color = 'success'
                    this.mensaje.texto = 'Nota Editada' 
                    this.showAlert();
                    this.editar=false;
                })
                .catch(e => {
                    console.log(e); 
                })
            
        },
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown 
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        }
            
    }
    
}

</script>


    