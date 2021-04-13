const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('<h1> <CENTER> PRÓXIMAMENTE VADA!!! </h1> </CENTER>'));

app.listen(8080);
console.log('Server on port 8080');