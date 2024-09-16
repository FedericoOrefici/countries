const express = require('express');
const app = express();
const port = 9000;
const cors = require('cors');

//Routes
const countriesRoutes = require('./src/routes/countriesRoutes');

//Middleware
app.use(cors());
app.use(express.json());
app.use('/api', countriesRoutes);

app.get('/', (req, res) => {
  res.send('Test');
});

app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});
