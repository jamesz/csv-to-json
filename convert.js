
var csvtojson = require('csvtojson');
var csvInputFilePath = "./data-in.csv";
var jsonOutputFilePath = "./data-out.json";
var fs = require('fs');

csvtojson()
.fromFile(csvInputFilePath)
.then((objectArray)=>{
  var newObjectArray = objectArray.map(object => {
    return Object.assign(object, {data: JSON.parse(object.data)})
  });

  fs.writeFile(jsonOutputFilePath, JSON.stringify(newObjectArray), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log(`See ${jsonOutputFilePath}`);
  });
});


