const express = require('express');
const cors = require('cors');
const app = express();
const port = 7000;

const { getMovies,filterMovies,addMovie } = require('./modules/app');
app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");

async function connectDb() {
    return new Promise((resolve, reject) => {
        const url = "mongodb://127.0.0.1:27017/";
        mongoose.connect(url, (err) => {
            if (err) {
                return reject(err)
            }

            console.log("Database successfully connected.");
            return resolve()
        })
    })
}

app.post('/add',addMovie);
app.get('/', getMovies);
app.get('/movies', filterMovies);

connectDb().then(() => {
    app.listen(port, () => {
        console.log("Server is running on port 7000");
    })
}).catch((err) => {
    console.log(err);
})