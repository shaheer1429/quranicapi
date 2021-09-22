const express = require('express');
const bodyParser = require('body-parser');
const https = require('http');
const { response } = require('express');
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
const port = 3000;



/* actual code is here */

app.get("/", function(req,res){
    res.render('Home')
})

app.post("/", function(req,res){ 
  const surah = req.body.surah;
  const api = 'http://api.alquran.cloud/v1/surah/'+surah+'/ar.alafasy'
 
  https.get(api, function(response){
      console.log(response.statusCode);
      response.on("data", function(data){
        const fullform = JSON.parse(data)
        console.log(fullform);
    })
  })
 
    })







/* Listening here */
app.listen(port, function()
{
    console.log('working');
})