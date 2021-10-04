
const btn_obtener_receta = document.getElementById('obtener_receta');
const esp_cont_receta = document.getElementById('cont_receta');

btn_obtener_receta.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
    crearReceta(res.meals[0]);        
        });
});

const crearReceta = (receta) => {
    console.log(receta);

    const nuevoHtml = `
    <p>${receta.strMeal}</p>
    <p>${receta.strArea}</p>
    <p>${receta.strInstructions}</p>
    <img src="${receta.strMealThumb}">
    <iframe src="https://www.youtube.com/embed/${receta.strYoutube.slice(-11)}"></iframe>

    `

    esp_cont_receta.innerHTML = nuevoHtml;
}

