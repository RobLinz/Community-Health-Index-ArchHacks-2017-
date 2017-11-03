var express = require('express');
var router = express.Router();
var fs = require('fs');

router.post('/', function(req, res, next) {
  if(!req.body || !req.body.zip){
    res.send({status: 'error', code: 1, message: 'missing zip code'});
  }else{
    fs.readFile('./public/data2.json', 'utf8', (err, data) => {
      if(err){
        res.send({status: 'error', code: 2, message: 'error fetching data', data});
      }else{
        const totalData = JSON.parse(data);
        if(!totalData.zipcodes[req.body.zip]){
          res.send({status: 'error', code: 3, message: 'no data for this zip code'});
        }else{
          let zipData = totalData.zipcodes[req.body.zip];
          console.log(totalData.country);
          res.send({status: 'ok', data: {
            country: totalData.country,
            state: totalData.states[zipData.state],
            city: zipData,
          }});
        }
      }
    });
  }
});

module.exports = router;