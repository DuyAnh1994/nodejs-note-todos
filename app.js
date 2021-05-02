// import module
let express = require('express')
let cookieParser = require('cookie-parser')
let morgan = require('morgan')
let bodyParser = require("body-parser")
let config = require("./config")
let mongoose = require("mongoose")
let setupController = require("./api/controller/setupController")
let todoController = require("./api/controller/todoController")

let app = express()
let port = process.env.PORT || 3000




// db info
mongoose.connect(config.getDbConnectionString())
setupController(app)
todoController(app)

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use("/assets", express.static(__dirname + "/public"))
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.text)
app.use(bodyParser.raw)
app.use(morgan("dev"))

// view engine setup
app.set('view engine', 'ejs')

// api
app.get("/", function (req, res) {
    res.render("index")
})


app.listen(port, function () {
    console.log("App listening on port: " + port)
})
module.exports = app