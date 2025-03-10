require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');


const app = express();
const port = process.env.PORT || 33060;

app.use(express.json());

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

// module.exports = connection;


app.listen(8000, () => {
    console.log(`Server running on port ${port}`);
});
