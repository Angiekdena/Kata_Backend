const express = require('express');
const talentoRouter = require('./routes/talentoRoutes');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/talento', talentoRouter);

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
