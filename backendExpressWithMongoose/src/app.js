import express from 'express';

const app = express();

app.use('*', (req, res) => {
  res.status(404).json({});
});

export default app;
