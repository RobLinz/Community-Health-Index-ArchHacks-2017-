var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  /*let connection = mysql.createConnection({
    host     : 'aa1wtzu5p8vkrfb.cjfnwtnzkfsq.us-west-2.rds.amazonaws.com',
    user     : 'sqluser',
    password : 'mwNE9steADc6xQBr',
    database : 'ArchHacks'
  });*/
  let totalData;
  fs.readFile('./public/data.json', 'utf-8', (err, data) => {
    if(err){
      connection.end();
      throw err;
    }
    totalData = JSON.parse(data);
    /**DATA PARSING GOES HERE*/

    let country = {
      airEQI: [],
      waterEQI: [],
      landEQi: [],
      builtEQI: [],
      totalEQI: [],
      socialEQI: [],
      superfundSites: [],
      Heart: [],
      Injury: [],
      Resp: [],
      Stroke: [],
      Cancer: [],
    };
    let states = {};
    Object.keys(totalData).forEach(zip => {
      if(!states[totalData[zip].state]){
        states[totalData[zip].state] = {
          airEQI: [],
          waterEQI: [],
          landEQi: [],
          builtEQI: [],
          totalEQI: [],
          socialEQI: [],
          superfundSites: [],
          Heart: [],
          Injury: [],
          Resp: [],
          Stroke: [],
          Cancer: [],
        };
      }

      if(totalData[zip].state === "ME"){
        console.log(totalData[zip].airEQI);
      }

      if(!isNaN(totalData[zip].airEQI) && parseFloat(totalData[zip].airEQI) >= 0){
        states[totalData[zip].state].airEQI.push(parseFloat(totalData[zip].airEQI));
        country.airEQI.push(parseFloat(totalData[zip].airEQI));
      }

      if(!isNaN(totalData[zip].waterEQI) && parseFloat(totalData[zip].waterEQI) >= 0){
        states[totalData[zip].state].waterEQI.push(parseFloat(totalData[zip].waterEQI));
        country.waterEQI.push(parseFloat(totalData[zip].waterEQI));
      }

      if(!isNaN(totalData[zip].landEQi) && parseFloat(totalData[zip].landEQi) >= 0){
        states[totalData[zip].state].landEQi.push(parseFloat(totalData[zip].landEQi));
        country.landEQi.push(parseFloat(totalData[zip].landEQi));
      }

      if(!isNaN(totalData[zip].builtEQI) && parseFloat(totalData[zip].builtEQI) >= 0){
        states[totalData[zip].state].builtEQI.push(parseFloat(totalData[zip].builtEQI));
        country.builtEQI.push(parseFloat(totalData[zip].builtEQI));
      }

      if(!isNaN(totalData[zip].totalEQI) && parseFloat(totalData[zip].totalEQI) >= 0){
        states[totalData[zip].state].totalEQI.push(parseFloat(totalData[zip].totalEQI));
        country.totalEQI.push(parseFloat(totalData[zip].totalEQI));
      }

      if(!isNaN(totalData[zip].socialEQI) && parseFloat(totalData[zip].socialEQI) >= 0){
        states[totalData[zip].state].socialEQI.push(parseFloat(totalData[zip].socialEQI));
        country.socialEQI.push(parseFloat(totalData[zip].socialEQI));
      }

      if(!isNaN(totalData[zip].superfundSites) && parseFloat(totalData[zip].superfundSites) >= 0){
        states[totalData[zip].state].superfundSites.push(parseFloat(totalData[zip].superfundSites));
        country.superfundSites.push(parseFloat(totalData[zip].superfundSites));
      }

      if(!isNaN(totalData[zip].Heart) && parseFloat(totalData[zip].Heart) >= 0){
        states[totalData[zip].state].Heart.push(parseFloat(totalData[zip].Heart));
        country.Heart.push(parseFloat(totalData[zip].Heart));
      }

      if(!isNaN(totalData[zip].Injury) && parseFloat(totalData[zip].Injury) >= 0){
        states[totalData[zip].state].Injury.push(parseFloat(totalData[zip].Injury));
        country.Injury.push(parseFloat(totalData[zip].Injury));
      }

      if(!isNaN(totalData[zip].Resp) && parseFloat(totalData[zip].Resp) >= 0){
        states[totalData[zip].state].Resp.push(parseFloat(totalData[zip].Resp));
        country.Resp.push(parseFloat(totalData[zip].Resp));
      }

      if(!isNaN(totalData[zip].Stroke) && parseFloat(totalData[zip].Stroke) >= 0){
        states[totalData[zip].state].Stroke.push(parseFloat(totalData[zip].Stroke));
        country.Stroke.push(parseFloat(totalData[zip].Stroke));
      }

      if(!isNaN(totalData[zip].Cancer) && parseFloat(totalData[zip].Cancer) >= 0){
        states[totalData[zip].state].Cancer.push(parseFloat(totalData[zip].Cancer));
        country.Cancer.push(parseFloat(totalData[zip].Cancer));
      }

    });

    country.airEQI = country.airEQI.reduce((a, b) => a + b, 0) / country.airEQI.length;
    country.waterEQI = country.waterEQI.reduce((a, b) => a + b, 0) / country.waterEQI.length;
    country.landEQi = country.landEQi.reduce((a, b) => a + b, 0) / country.landEQi.length;
    country.builtEQI = country.builtEQI.reduce((a, b) => a + b, 0) / country.builtEQI.length;
    country.totalEQI = country.totalEQI.reduce((a, b) => a + b, 0) / country.totalEQI.length;
    country.socialEQI = country.socialEQI.reduce((a, b) => a + b, 0) / country.socialEQI.length;
    country.superfundSites = country.superfundSites.reduce((a, b) => a + b, 0) / country.superfundSites.length;

    country.Heart = country.Heart.reduce((a, b) => a + b, 0) / country.Heart.length;
    country.Injury = country.Injury.reduce((a, b) => a + b, 0) / country.Injury.length;
    country.Resp = country.Resp.reduce((a, b) => a + b, 0) / country.Resp.length;
    country.Stroke = country.Stroke.reduce((a, b) => a + b, 0) / country.Stroke.length;
    country.Cancer = country.Cancer.reduce((a, b) => a + b, 0) / country.Cancer.length;

    Object.keys(states).forEach(state => {
      states[state].airEQI = states[state].airEQI.reduce((a, b) => a + b, 0) / states[state].airEQI.length;
      states[state].waterEQI = states[state].waterEQI.reduce((a, b) => a + b, 0) / states[state].waterEQI.length;
      states[state].landEQi = states[state].landEQi.reduce((a, b) => a + b, 0) / states[state].landEQi.length;
      states[state].builtEQI = states[state].builtEQI.reduce((a, b) => a + b, 0) / states[state].builtEQI.length;
      states[state].totalEQI = states[state].totalEQI.reduce((a, b) => a + b, 0) / states[state].totalEQI.length;
      states[state].socialEQI = states[state].socialEQI.reduce((a, b) => a + b, 0) / states[state].socialEQI.length;
      states[state].superfundSites = states[state].superfundSites.reduce((a, b) => a + b, 0) / states[state].superfundSites.length;

      states[state].Heart = states[state].Heart.reduce((a, b) => a + b, 0) / states[state].Heart.length;
      states[state].Injury = states[state].Injury.reduce((a, b) => a + b, 0) / states[state].Injury.length;
      states[state].Resp = states[state].Resp.reduce((a, b) => a + b, 0) / states[state].Resp.length;
      states[state].Stroke = states[state].Stroke.reduce((a, b) => a + b, 0) / states[state].Stroke.length;
      states[state].Cancer = states[state].Cancer.reduce((a, b) => a + b, 0) / states[state].Cancer.length;
    });

    let output = {
      country,
      states,
      zipcodes: totalData,
    };

    //res.send('<pre>' + JSON.stringify(states,null,2) + '</pre>');

    /**END PARSING*/
    exportData(output, res, true);
  });
  /*
  connection.connect(err => {
    if (err) throw err;
  });
  */
});

const exportData = (data, res, active) => {
  if(active){
    fs.writeFile("./public/data2.json", JSON.stringify(data,null,2), 'utf8', err => {
      if(err) throw err;
      res.send('<pre>' + JSON.stringify(data,null,2) + '</pre>');
    });
  }else{
    res.send('<pre>' + JSON.stringify(data,null,2) + '</pre>');
  }
};

module.exports = router;

/*
fs.readFile('./public/datasets/combinedfiles.csv', 'utf-8', (err, data) => {
      if(err) throw err;
      let lines = data.split('\r').map(line => line.split(','));
      let headers = [...lines[0]];
      headers.splice(0,2);
      headers.splice(1,3);

      lines.splice(0,1);
      lines = lines.map(line => {
        line.splice(0,2);
        line.splice(1,3);
        let out = {};
        line.forEach((item, i) => {
          out[headers[i]]= item;
        });
        return out;
      });

      lines.forEach(line => {
        if(totalData[line.zip]){
          totalData[line.zip] = Object.assign({}, totalData[line.zip], line);
        }
      });
      exportData(totalData, res, true);
    });
 */