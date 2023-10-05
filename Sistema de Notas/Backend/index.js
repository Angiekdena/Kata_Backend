const express = require('express');
const connectDB = require('./mongoDb');
const cors = require('cors');
const noteRoute = require('./routes/noteRoute');
const userRoute = require('./routes/userRoute');
const auth = require('./auth');
const app = express();
const PORT = 3000;
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.use('/note', auth, noteRoute);
app.use('/user', userRoute);

connectDB();

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
