var path = require('path');
var url = require('url');
var queryString = require('querystring');

module.exports = function(source, map) {
   this.cacheable && this.cacheable();
   var query = queryString.parse(url.parse(this.query).query);
   var msg = query.msg || "echo: ";   
   console.log(msg + ": "+ path.basename(this.resourcePath));   
   if(msg === "dump") {
      console.log("*************");
      console.log(source);
      console.log("*************");      
   }   
   this.callback(null, source, map);
};
