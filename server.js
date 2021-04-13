const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('<h1> <CENTER> GUSSI PUKA DEL ORTO!!! </h1> </CENTER>'));

app.listen(3000);
console.log('Server on port 3000');