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

//return a list of step by step instructions for preparing a recipe
function getInstructions(id) {
  return db("recipes")
    .join("steps", "recipes.id", "steps.scheme_id")
    .where({ scheme_id: id })
    .orderBy("step_number")
    .select(
      "steps.id as steps id",
      "recipes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    );
}

async function getInstructions(newRecipe) {
  return db("recipes")
    .insert(newRecipe)
    .then(([id]) => {
      // return newId;
      // return db("recipes")
      //   .where({ id })
      //   .first();
      return findById(id);
    })
    .catch(err => console.log(err.message));
}

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions
};
