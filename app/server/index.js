import app from './app';
global._ = require('lodash');

const PORT = process.env.PORT || 8080;

app.listen(PORT);

console.log(`Listening at http://localhost:${PORT}`);
