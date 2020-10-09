var Connection = require('tedious').Connection;  
var config = {  
    server: '10.0.0.5',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'sa', //update me
            password: 'apsiSQL2008tepic'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: false,
        database: 'apsisistemas'  //update me
    }
}; 

var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    if (!err) {
        console.log("Connected");  
    }else{
        console.log(err)
    }
     
    //await executeStatement();  
});  



var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES;  

function executeStatement() {  
        request = new Request("SELECT top(5)* FROM empleados;", function(err) {  
        if (err) {  
            console.log(err);}  
        });  
        var result = "";  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + " ";  
              }  
            });  
            console.log(result);  
            result ="";  
        });  
  
        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
        connection.execSql(request);  
    }