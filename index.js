const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const pathFolder = path.resolve(__dirname);


/**
 * Middleware 
 * 
*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(pathFolder + '/public'));
app.use(cors({
    origin: process.env.REMOTE_ADDR,
    credentials: true
}));


/**Iniciar el servidor.... */
const port = 8002;
server.listen(port, '0.0.0.0', () => {
    process.env.APP_PATH = __dirname;
    console.log(`Server listening on port ${ port }`);
});
