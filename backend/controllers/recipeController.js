const addRecipe = async (req, res) => {
  try {
    const { title, ingredients, steps } = req.body;

    if (!title || !ingredients || !steps) {
      return res.status(400).json({ error: "Missing parameters" });
    }

    return res.status(200).json({ title, ingredients, steps });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { addRecipe };
