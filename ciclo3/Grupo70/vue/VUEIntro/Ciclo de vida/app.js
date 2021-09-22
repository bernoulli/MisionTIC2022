Vue.component('saludo',{
    template: `
    <div>
        <h1>{{saludo}}</h1>
        <h3>asd</h3>
    </div>
    `,
    data(){0
        return {
            saludo : 'hola soy un saludo'
        }
    }
});

const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Ciclo de Vida',
        contador: 0
    },
    
})