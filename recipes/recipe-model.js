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
function getShoppingList(id) {
  return db("recipes")
    .where({ id })
    .first();
}

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions
};
