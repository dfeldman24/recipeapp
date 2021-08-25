const express = require('express');
const app = express();
const path = require('path');
const assets_path = path.join(__dirname, '../assets')

app.use('/public', express.static(path.join(__dirname, '../public')));
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(assets_path,'index.html'))
})
app.listen(8080);