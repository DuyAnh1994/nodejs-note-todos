let Todos = require("../models/todoModel")

function getTodos(res) {
    Todos.find(function (error, todos) {
        if (error) {
            res.send(error)
        } else {
            res.json(todos)
        }
    })
}

module.exports = function (app) {
    // get all todos
    app.get("/api/todos", function (req, res) {
        getTodos(res)
    })

    // find todos by id
    app.get("/api/todo/:id", function (req, res) {
        Todos.findById({
            _id: req.params.id
        }, function (error, todo) {
            if (error) {
                throw error
            } else {
                res.json(todo)
            }
        })
    })

    // create a todos
    app.post("/api/todo", function (req, res) {
        console.log(`zzz:    ${req.body}`)
        // let todo = {
        //     text: req.body.text,
        //     isDone: req.body.isDone
        // }
        // Todos.create(todo, function (error, todo) {
        //     if (error) {
        //         throw error
        //     } else {
        //         getTodos(res)
        //     }
        // })
    })

    // update a todos
    app.put("/api/todo", function (req, res) {
        if (!req.body.id) {
            return res.status(500).send("ID is required")
        } else {
            Todos.update({
                _id: req.body.id
            }, {
                text: req.body.text,
                isDone: req.body.isDone
            }, function (error, todo) {
                if (error) {
                    return res.status(500).json(error)
                } else {
                    getTodos(res)
                }
            })
        }
    })

    // delete a todos
    app.delete("/api/todo/:id", function (req, res) {
        Todos.remove({
            _id: req.body.id
        }, function (error, todo) {
            if (error) {
                return res.status(500).json(error)
            } else {
                getTodos(res)
            }
        })
    })
}
