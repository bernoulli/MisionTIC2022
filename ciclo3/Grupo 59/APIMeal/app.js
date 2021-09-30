
const btn_obtener_receta = document.getElementById('obtener_receta');
const receta_cont = document.getElementById('receta');
var nombre_receta = document.getElementById('nombre').value;
//const receta = '';

btn_obtener_receta.addEventListener('click', () => {
    console.log(nombre_receta);
    let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + nombre_receta;

    fetch(url)
        .then(res => res.json())
        //console.log(res.json());
        //.then(data => console.log(data));
        .then(res => {
    
    
        crearReceta(res.meals[0]);
   
    
    //console.log();

    })
        
});

const crearReceta = (receta) => {
    console.log(receta);

    const nuevoInnerHTML = `
    <p> ${receta.strMeal} </p>
    <p> ${receta.strArea} </p>
    <p> ${receta.strInstructions}</p>
    <img src="${receta.strMealThumb}">
    <div>
    <iframe src="https:/www.youtube.com/embed/${receta.strYoutube.slice(-11)}"></iframe>
    </div>`;

    receta_cont.innerHTML = nuevoInnerHTML;


}


