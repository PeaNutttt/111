const express = require("express")
const app = express()
var bodyParser = require('body-parser');

app.use( bodyParser.urlencoded({extended: true}) )
app.use(require('cors')())
app.use(express.json())

require('./routes/admin')(app)
require('./routes/web')(app)
require('./plugins/db')(app)

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})