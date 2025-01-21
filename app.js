const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));


app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});


app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});


app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
