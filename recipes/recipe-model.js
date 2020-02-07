const db = require("../data/db-config.js");

//return a list of all recipes in the database.
function getRecipes() {
  return db("recipes").select();
}

function getRecipeById(id) {
  return db("recipes")
    .where({ id })
    .first();
}

//return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {
  return db("ingredients as i")
    .join("recipe_ingredients as ri", "i.id", "ri.ingredient_id")
    .join("recipes as r", "ri.recipe_id", "r.id")
    .where({ recipe_id })
    .select("ri.quantity", "i.name");
}

//return a list of step by step instructions for preparing a recipe
function getInstructions(recipe_id) {
  return db("steps")
    .join("recipes", "recipes.id", "steps.recipe_id")
    .where({ recipe_id })
    .orderBy("steps.step_number")
    .select(
      "recipes.name as recipe_name",
      "steps.step_number",
      "steps.instructions"
    );
}

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions
};
