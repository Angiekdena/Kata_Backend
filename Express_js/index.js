const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).send({ mensaje: "Hola mundo" });
});

app.get("/api/suma", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.status(200).send({ resultado: num1 + num2 });
});

app.get("/api/usuario/:nombre", (req, res) => {
  let { nombre } = req.params;
  res.status(200).send({ usuario: nombre });
});

app.get("/api/swapi/:id", async (req, res) => {
  let { id } = req.params;
  let busqueda = await axios.get("https://swapi.dev/api/people/" + id);
  res.status(200).json({ personaje: busqueda.data });
});

app.put("/api/body", (req, res) => {
  res.status(200).json(req.body);
});

app.post("/api/body", (req, res) => {
  res
    .status(200)
    .json({ ...req.body, resultado: req.body.num1 + req.body.num2 });
});

app.delete("/api/delete/:id", (req, res) => {
  let { id } = req.params;
  if (id == 3) {
    res.status(200).send("Se ha eliminado el objeto con ID 3");
  }
  res.status(404).send("No se encontró el objeto con el ID especificado");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
