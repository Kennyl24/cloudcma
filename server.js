const express = require('express');
const app = express();
app.use('/', express.static(__dirname + '/./public/'));

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});