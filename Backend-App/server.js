const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const usersRoutes = require('./routes/user.route.js');


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
app.get("/api", (req, res) => {
    res.json({ message: "The api is running" })
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
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    app.use('/api/users', usersRoutes);