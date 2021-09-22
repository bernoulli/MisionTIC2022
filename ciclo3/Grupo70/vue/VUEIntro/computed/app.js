const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Trabajando Computado',
        contador: 0
    },
    methods:{

    },
    computed: {
        color(){
            return{
                'bg-success' : this.contador <= 10,
                'bg-warning' : this.contador > 10 && this.contador <= 20,
                'bg-danger' : this.contador > 20
            }
        },

        },
    filter:{
            percentagedecimal(value){
                return value.toFixed(2);
            }
        }
    
})