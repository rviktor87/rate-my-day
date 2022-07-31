import express from 'express';
import apiRoutes  from './api.routes';
import errorHandler from "./error-handler";

const app = express();

app.use('/api', apiRoutes);
app.use('*', (req, res) => {
  res.status(404).json({});
});

app.use(errorHandler)

export default app;
