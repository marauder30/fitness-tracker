const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const mysql = require("mysql");
let connection;

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

const mongoUri = process.env.MONGODB_URI || "mongodb://localhost/workoutdb";

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: "SQL$tchamps8080",
        database: "workoutdb"
    });
}

mongoose.connect(mongoUri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

connection.connect();
module.exports = connection;