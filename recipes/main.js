import recipes from "./recipes.mjs";


function  randomListEntry(list){
    const number = Math.floor(Math.random()*list.length)
    return list[number]
}

function recipeTemplate(recipe){
    
    return `<div class="recipe">
            <img class="food" src="${recipe.image}" alt="${recipe.name}">
            <div class="info">
                <h2 class="name">${recipe.name}</h2>
                <p class="description"${recipe.desciption}</p>
                ${tagsTemplate(recipe.tags)}
                ${ratingTemplate(recipe.rating)}
            </div>
        </div>`;
}

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html = `<div class="tags">`;
    // AI helped fix this part of my code as I was using a foreach and it wasn't working properly
    html += tags.map(tag => `<button class="tag">${tag}</button>`).join("\n");
    html += `</div>`;
	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
    // our ratings are always out of 5, so create a for loop from 1 to 5

    for (let i = 0; i < 5; i++){

        if (i < rating){
            html += `<span aria-hidden="true" class="icon-star">⭐</span>\n`;
            
        }
        else{
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>\n`;
        }
    }
		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star

		// else output an empty star

	// after the loop, add the closing tag to our string
	html += `</span>`;
	// return the html string
	return html
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const main = document.querySelector("main");
    main.innerHTML = "";

	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    recipeList.forEach(element => {
        let recipe = recipeTemplate(element);
        
        
	// Set the HTML strings as the innerHTML of our output element.
    main.innerHTML += recipe
    });
}

function init() {
  // get a random recipe
  const recipe = randomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();
//console.log(randomListEntry(recipes));
const find = document.getElementById("lookup")
const input = document.getElementById("js-recipe")
find.addEventListener("click", () => {
  searchHandler();
})

function searchHandler(){
    event.preventDefault();
    const value = input.value;
    filterRecipes(recipes, value)
}

function filterRecipes(recipes, query){

    recipes.sort((a, b) => a.name.localeCompare(b.name))
    recipes = recipes.filter(recipe => {
        return(
           recipe.name.toLowerCase().includes(query.toLowerCase()) ||
           recipe.tags.some(tag =>tag.toLowerCase().includes(query.toLowerCase())) ||
           recipe.recipeIngredient.some(ingerdient =>
           ingerdient.toLowerCase().includes(query.toLowerCase())) ||
           recipe.description.toLowerCase().includes(query.toLowerCase())
           )
    });
    renderRecipes(recipes); 
}




