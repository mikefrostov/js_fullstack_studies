const express = require ('express');




const app = express();

app.get('/', (req, res) => {
  res.send({ h1: 'dummy' });
});

app.listen(5001 , function(){
    console.log('Server running on 5001...');
});
