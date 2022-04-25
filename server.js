const express = require('express');
const app = express();
const cors = require('cors');
const patterns = require('./data.js');

app.use(cors({ origin: "http://myappurl.com", credentials: true }));
app.use(express.json());

app.locals.title = 'Knitly Patterns';
app.locals.patterns = [...patterns];

app.set('port', 3001);
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

app.get('/inspirations', (request, response) => {
  let resPatterns = JSON.stringify(app.locals.patterns);
  response.status(200).send(resPatterns);
});

app.post('/inspire', (request, response) => {
  const pattern = request.body;
  app.locals.patterns.push(pattern)
  response.status(201);
});
