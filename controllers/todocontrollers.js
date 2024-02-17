const Todo = require("../models/todoModels");
//add todo module
const createTodo = async(req,res)=>{
    try{
        const _todo = await Todo.create(req.body);
        res.redirect("/todo");
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});

    }
};

//get todo
const getTodo = async(req,res) => {
    try{
        const alltodo = await Todo.find();
        res.render("index",{ todo : alltodo });

    }catch(error){
        res.status(500).json({message:error.message});
    }
};

//delete todo
const deleteTodo = async(req,res)=>{
    try{
        const {_id} = req.params;
        const _todo =await Todo.findByIdAndDelete(_id);

        //we cannot find any student in database
        if(!_todo){
            res.status(404).json({message:`Cannot find any student with id ${_id}`});
        }
        res.redirect("/todo");
    }catch(error){
        res.status(500).json({message :error.message});
    }
};

module.exports = {
    createTodo,
    getTodo,
    deleteTodo
};