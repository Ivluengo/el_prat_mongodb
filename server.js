import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import mongoose from 'mongoose';

import { userRouter } from './src/routes/userRouter.js';
// import { sequelize } from './src/db/connectDBSequelize.js';
// import { connection } from './src/db/connectDB.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Home</h1>');
});

app.use('/users', userRouter);

app.use((error, req, res, next) => {
  res.send({ error: error.message });
});

try {
  //* mongodb
  await mongoose.connect(process.env.MONGO_URL);
  console.log('Conectado a MongoDB');

  //* mysql
  // await connection.connect();
  // console.log('Conectado a MYSQL');

  //* sequelize a mysql
  // await sequelize.authenticate();
  // console.log('Conectado a Sequalize con MYSQL');

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}...`));
} catch (error) {
  console.log(error.message);
}
