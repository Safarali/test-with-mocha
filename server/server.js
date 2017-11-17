const express = require("express");
const port = process.env.PORT || 3000;
let app = express();

app.get("/", (req, res) => {
	res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([
        {name: "Ali", age: 28},
        {name: 'Nan', age: 31}
    ]);
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});

module.exports.app = app;
