const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const tolerancesRouter = require('./routes/tolerances');
const multipliersRouter = require('./routes/multipliers');
app.use('/tolerances', tolerancesRouter);
app.use('/multipliers', multipliersRouter);

app.listen(port, () => {
    console.log('Server is running on port :' + port);
})