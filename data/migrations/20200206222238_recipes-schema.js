exports.up = async function(knex) {
  await knex.schema.createTable("recipes", tbl => {
    tbl.increments();
    tbl.string("name").notNullable();
  });
  await knex.schema.createTable("ingredients", tbl => {
    tbl.increments();
    tbl.string("name").notNullable();
    // tbl.integer("quantity").notNullable();
    // tbl
    //   .integer("recipe_id")
    //   .notNullable()
    //   .references("recipes.id")
    //   .onDelete("CASCADE")
    //   .onUpdate("CASCADE");
  });
  await knex.schema.createTable("steps", tbl => {
    tbl.increments();
    tbl.integer("step_number").notNullable();
    tbl.string("instructions").notNullable();
    tbl
      .integer("recipe_id")
      .notNullable()
      .references("recipes.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
  await knex.schema.createTable("recipe_ingredients", tbl => {
    tbl
      .integer("recipe_id")
      .notNullable()
      .references("recipes.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("ingredient_id")
      .notNullable()
      .references("ingredients.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.integer("quantity").notNullable();
    tbl.primary(["recipe_id", "ingredient_id"]);
  });
};

exports.down = function(knex) {
  await knex.schema.dropTableIfExists("recipes_ingredients");
  await knex.schema.dropTableIfExists("steps");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("recipes");
};
