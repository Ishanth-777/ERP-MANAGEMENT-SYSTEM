const express = require("express");

const router = express.Router();

router.get("/", (req,res)=>{
res.send("Employee API Working");
});

module.exports = router;