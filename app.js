const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")

const app = express()

const gamesRoutes = require("./routes/games")
const searchRoutes = require("./routes/search")

//STATIC FILES (ASSETS)
// app.use(express.static(path.join(__dirname, "build")))

//BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//CORS
app.use(cors())

//ROUTES
app.use("/games", gamesRoutes)
app.use("/search", searchRoutes)

//EXPRESS USING REACT APP BUILD (DEFINE ALWAYS AFTER ENDPOINTS)
// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "build", "index.html"))
// })

var server = app.listen(process.env.PORT || 3001, function () {
    var port = server.address().port
    console.log("Server running on port: " + port)
})
