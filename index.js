const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Hola desde el server en express");
})

app.listen(PORT, () => {
  console.log(`server on http://localhost:${PORT}`);
})
