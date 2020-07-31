const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

//para poder deployarlo en un puerto variable
const port = process.env.PORT || 8080;

//ingresamos las rutas
const about = require("./JSON/About.json");
const portfolio = require("./JSON/Portfolio.json");

app.get('/about', (req, res) => {
    res.json(about)
});

app.get('/portfolio', (req, res) => {
    res.json(portfolio)
});

//comprobacion de si levanta el servidor y esta funcionando
app.listen(port, () => {
    console.log(`Server on: ${port}`)
});