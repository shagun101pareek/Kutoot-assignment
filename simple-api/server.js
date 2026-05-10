const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let users = [];

// GET endpoint
app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    data: users,
  });
});

// POST endpoint
app.post("/users", (req, res) => {
  const { name } = req.body;

  // Error handling
  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Name is required",
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User added successfully",
    user: newUser,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});