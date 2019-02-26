const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

app.use(express.static('public'));

app.all('*', (req, res, next) => {
  console.log('qweq', req.path);
    res.redirect(`http://localhost:9003${req.path}`);

});

app.listen(port, () => {
  console.log(`listening to: ${port}`);
});