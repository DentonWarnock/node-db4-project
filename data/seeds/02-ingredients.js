exports.seed = function(knex) {
  return knex("ingredients").insert([
    { name: "beef" },
    { name: "cheese" },
    { name: "lettuce" },
    { name: "spices" },
    { name: "taco shells" },
    { name: "dough" },
    { name: "sauce" },
    { name: "buns" }
  ]);
};
