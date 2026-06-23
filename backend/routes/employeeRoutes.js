const express = require("express");

const router = express.Router();

const Employee =
require("../models/Employee");

router.get(
"/",
async(req,res)=>{

try{

const employees =
await Employee.find();

res.json(
employees
);

}

catch(error){

res.status(500)
.json({
message:
error.message
});

}

});

router.post(
"/add",
async(req,res)=>{

try{

const employee =
new Employee(
req.body
);

await employee.save();

res.status(201)
.json({

message:
"Employee Added",

data:
employee

});

}

catch(error){

res.status(500)
.json({

message:
error.message

});

}

});

module.exports =
router;