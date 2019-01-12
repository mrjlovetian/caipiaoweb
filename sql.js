var express = require('express');
var app = express();
var router = express.Router();
var mysql = require('mysql');

app.use(router);
router.get('/allcaipaio', function(req, res){
    var con = mysql.createConnection({
        'host':'localhost',
        'user':'root',
        'password':'897011805',
        'database':'yhj'
    })

    con.connect()
    con.query('SELECT *FROM caipiao', function(err, results){
        if (err) throw err;
        var datas = [];
        for (va in results) {
            var value = {"period": va.period}
            print('..................'+value, va, va.period)
            datas.push(value);
        }
        res.send(JSON.stringify(datas))
    })
})

app.listen(3000, function(err){
    if (err) throw err;
    console.log('server starting!!')
})