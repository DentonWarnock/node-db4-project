exports.seed = function(knex) {
  return knex("recipes").insert([
    { name: "tacos" },
    { name: "pizza" },
    { name: "hamburger" }
  ]);
};
