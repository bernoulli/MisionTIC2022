var app = new Vue({
    el : '#app',
    data : {
        titulo : "Intro con VUE grupo 45, lunes",
        peliculas : [],
        enlace : 'https://www.google.com.co',
        imagen : 'https://placeimg.com/640/480/any',
        tituloH1: 'alert',
        cantidad : 10,
        contingencia : 'Soy un texto de contingencia',
        tareas: [
            { text: 'Aprender JavaScript' },
            { text: 'Aprender Vue' },
            { text: 'Construir algo increíble' }
          ],
        textoBuscar : ''
    },
    methods : {
        reverseMessage () {
            console.log(this.titulo);

            this.titulo = this.titulo.split('').reverse().join('')

            // this.message = this.message.split('').reverse().join('')
          },

        async getApiData () {
            let urlApi = `http://www.omdbapi.com/?apikey=23daade9&t=${this.textoBuscar}&type=movie&plot=full`      
            try {
                const resultText = await fetch(urlApi, {method: 'GET'});
                const resultJson = await resultText.json();
                console.log(resultJson);
                this.peliculas.push(resultJson);
           
            } catch (error) {
                console.log(error);
            }
        },
    }
})