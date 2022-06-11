const express = require('express');
const cors = require('cors');
const ejs = require('ejs');

const env = require('./env');

const app = express();
app.use(cors());
app.use('/public', express.static(__dirname+'/pages/public'));
app.use('/assets', express.static(__dirname+'/assets'));
app.set('view engine', 'ejs');
app.set('views', __dirname+'/pages');

app.get('/', (req, res) => {
    res.render('principal');
});

app.listen(env.server.port, () => {
    console.log({ server: 'Server online' });
});