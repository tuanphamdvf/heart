const express = require('express');
const app = express();
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3010);

console.log('Running at Port 3010');