import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'olá' });
});

app.post('/', (req, res) => {
  return res.json({ message: 'olá' });
});

app.listen(3333, () => console.log('Server started on 3333'));
