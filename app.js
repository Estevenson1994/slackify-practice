const express = require('express')
const path = require('path')
const app = express()
const port = 8081
const XMLHttprequest = require('xmlhttprequest').XMLHttpRequest;
const os = require('os')
var request = new XMLHttprequest();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.get('/', (req, res) =>
    res.render('index'))

CLIENT_ID = os.environ['Client_id_ritekit']
app.get('/emoji', (req, res) => {
    request.addEventListener("load", master_listener);
    request.open("GET", 'https://api.ritekit.com/v1/emoji/auto-emojify?text=' + req.query['test'] + '&client_id=' + CLIENT_ID)
    request.send()

    function master_listener() {
        var data = JSON.parse(this.responseText)
        res.send(data);
    }

});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))