var request = require("request");

var options = { method: 'POST',
  url: 'https://docs.google.com/forms/d/e/1FAIpQLScHDOPbeTOxMtEJG4j9OL6Wh7x_3tOVUPnWm8tSSqkGz-Tf8g/formResponse',
  headers:
   { 'postman-token': '21040aa1-35df-185d-6973-1aeb8e9cc49b',
     'cache-control': 'no-cache',
     'content-type': 'application/x-www-form-urlencoded' },
  form:
   { 'entry.2017833709.other_option_response': '',
     'entry.2017833709': 'Evan Alencar (2º colocado)' } };


var i = 0;
  setInterval(function(){
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log(i++);
    });
  },1000)
