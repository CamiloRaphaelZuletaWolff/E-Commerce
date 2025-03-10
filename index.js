const connection = require('./database');

connection.query('SELECT * FROM almuerzos', (err, results) => {
    if (err) throw err;
    console.log(results);
});
