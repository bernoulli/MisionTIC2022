
const btn_obtener_receta = document.getElementById('obtener_receta');
const receta_cont = document.getElementById('cont_receta')

btn_obtener_receta.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
    crearReceta(res.meals[0]);
        });

});

const crearReceta = (receta) => {
    //console.log(receta);

    const nuevoinnerhtml = `
    <p>Receta: ${receta.strMeal}</p>
    <p>Origen: ${receta.strArea}</p>
    <p>Instrucciones de Preparación: ${receta.strInstructions}</p>
    <p> Imagen de la receta </p>
    <img src="${receta.strMealThumb}">
    <p> video con instrucciones de preparación </p>
    <iframe src="https://youtube.com/embed/${receta.strYoutube.slice(-11)}"> </iframe>
    <video width="320" height="240" controls> <source src="${receta.strYoutube}"></video>
    `;
    receta_cont.innerHTML = nuevoinnerhtml;

    localStorage.setItem('recetas',JSON.stringify(receta));

    let datosReceta = JSON.parse(localStorage.getItem(('recetas')));
    console.log('obj: ',datosReceta);

}

