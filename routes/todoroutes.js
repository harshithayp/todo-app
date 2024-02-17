const express = require("express");
const router = express.Router();
const { createTodo, getTodo,deleteTodo }= require("../controllers/todocontrollers");


//add todo
router.post("/add",createTodo);
router.get("/",getTodo);
router.get("/delete/:_id",deleteTodo);


module.exports=router;