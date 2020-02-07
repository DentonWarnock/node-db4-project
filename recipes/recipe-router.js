const express = require("express");

const Recipe = require("./recipe-model");

const router = express.Router();

router.get("/", (req, res) => {
  Recipe.getRecipes()
    .then(recipe => {
      res.json(recipe);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Recipe.getRecipeById(id)
    .then(recipe => {
      if (recipe) {
        res.json(recipe);
      } else {
        res
          .status(404)
          .json({ message: "Could not find recipe with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipe" });
    });
});

router.get("/:id/shopping", (req, res) => {
  const { id } = req.params;

  Recipe.getShoppingList(id)
    .then(list => {
      if (list.length) {
        res.json(list);
      } else {
        res
          .status(404)
          .json({ message: "Could not find list for given scheme" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get steps" });
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;

  Recipe.getInstructions(id)
    .then(instructions => {
      if (instructions.length) {
        res.json(instructions);
      } else {
        res
          .status(404)
          .json({ message: "Could not find instructions for given scheme" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get instructions" });
    });
});

module.exports = router;
