const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

var corsOptions = {
    origin: "http://localhost:5050/"
}
app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5050

app.listen(PORT, () => {
    console.log(`Server is running on Port: → ${PORT}`);
})
app.get("/", (req, res) => {
    res.json({ message: "Welcome to your server" })
})

const db = require("./Models/index.js")
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to the database ✅✅");
    })
    .catch(()=>{
        console.log("Cannot connect to the database ❌❌");
        process.exit()
    })
