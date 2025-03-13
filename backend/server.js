const express = require("express");
const cors = require("cors");

const app = express();
const recipeRoutes = require("./routes/recipeRoute");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.use("/recipe", recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
