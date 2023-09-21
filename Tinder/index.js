const express = require('express');
const talentoRouter = require('./routes/talentoRoutes');
const clienteRouter = require('./routes/clienteRoutes');
const servicioRouter = require('./routes/servicioRoutes');
const habilidadRouter = require('./routes/habilidadRoutes');
const calificacionRouter = require('./routes/calificacionRoutes');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/talento', talentoRouter);
app.use('/cliente', clienteRouter);
app.use('/servicio', servicioRouter);
app.use('/habilidad', habilidadRouter);
app.use('/calificacion', calificacionRouter);

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
