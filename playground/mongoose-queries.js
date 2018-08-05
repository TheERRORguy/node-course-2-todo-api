const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = "5b66f9bf244e15279c5195ec";

Todo.find({
    _id : id
}).then((todos) => {
    console.log('Todos',todos);
});

Todo.findOne({
    _id : id
}).then((todo) => {
    console.log('Todo',todo);
});
Todo.findById(id).then((todos) => {
    console.log('Todo by ID',todos);
});