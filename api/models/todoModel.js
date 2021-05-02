let mongoose = require("mongoose")

let Schema = mongoose.Schema

let todoSchema = new Schema({
    text: String,
    isDone: Boolean
})

let Todos = mongoose.model("todos", todoSchema)

module.exports = Todos
