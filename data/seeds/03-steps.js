exports.seed = function(knex) {
  return knex("steps").insert([
    {
      step_number: 1,
      instructions: "Cook Beef on stovetop over medium heat",
      recipe_id: 1
    },
    {
      step_number: 2,
      instructions: "Assemble all ingredients into shell",
      recipe_id: 1
    },
    {
      step_number: 1,
      instructions: "Prepare pizza dough by rolling flat",
      recipe_id: 2
    },
    {
      step_number: 2,
      instructions: "Add sauce, spices, cheese, and toppings",
      recipe_id: 2
    },
    {
      step_number: 3,
      instructions: "Cook in 400 degree oven for 15 minutes",
      recipe_id: 2
    },
    { step_number: 1, instructions: "Cook Beef on BBQ", recipe_id: 3 },
    {
      step_number: 2,
      instructions: "Assemble all ingredients into bun and enjoy",
      recipe_id: 3
    }
  ]);
};
