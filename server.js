const express = require('express');
const app = express();
app.use('/', express.static(__dirname + '/./public/'));

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
app.listen(process.env.PORT || 7000, () => {
  console.log('Express running');
});