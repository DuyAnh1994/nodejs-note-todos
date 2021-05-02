let Todos = require("../models/todoModel")

module.exports = function (app) {
    app.get("/api/setupTodos", function (req, res) {
        let seedTodos = [
            {
                text: "Học NodeJS",
                isDone: false
            },
            {
                text: "Học Android",
                isDone: true
            },
            {
                text: "Viết một ứng dụng hoàn chỉnh",
                isDone: false
            }
        ]
        Todos.create(seedTodos, function (error, result) {
            res.send(result)
        })
    })
}