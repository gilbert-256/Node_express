// require express dependency to include the express functionality
const express = require('express');
// creates express server ->to send/output data
const server=express();

server.listen(3000,function(){
    console.log('Listening on 3000')
})

server.get('/',(req,res) => {
    res.send('Hello world')
});
 