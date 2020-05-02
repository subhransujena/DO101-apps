const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

<<<<<<< HEAD
    response = 'This is version 3 of the app!' + '\n';
=======
    response = 'This is version 2 of the app.' + '\n';
>>>>>>> f1084ce9b4d8bace66aad3827b789549e45e48f9

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
