const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Employee API Working");
});

router.post("/add", (req, res) => {
  res.json({
    message: "Employee Added",
    data: req.body
  });
});

module.exports = router;