const express = require('express')
const path = require('path')
const app = express()
const port = 8081
const XMLHttprequest = require('xmlhttprequest').XMLHttpRequest;
var request = new XMLHttprequest();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.get('/', (req, res) =>
    res.render('index'))

app.get('/emoji', (req, res) => {
    request.addEventListener("load", master_listener);
    request.open("GET", 'https://api.ritekit.com/v1/emoji/auto-emojify?text=' + req.query['test'] + '&client_id=e4c82e4f85bcd0cccdafc47a4980606c52f545f662fe')
    request.send()

    function master_listener() {
        var data = JSON.parse(this.responseText)
        res.send(data);
    }

});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))