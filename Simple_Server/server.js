const express  = require("express");
const path = require("path");
const app = express();

app.get('/', function(request,response){
    response.sendFile(path.join(__dirname, './html_files','Mywebpage.html'));
});

app.get('*', function(request,response){
    response.send('Error 404 Page Not Found');
});


app.listen(8000,function(){
    console.log("Server is up at port 8000");
});