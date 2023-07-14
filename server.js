const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const validateEmailSyntax = require('./routes/validate')

const PORT  = 4000;

app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT);
})

app.use('/validate',validateEmailSyntax)

module.exports = app;