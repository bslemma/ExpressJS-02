const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const validator = require('express-validator')
// var cors = require('cors')
const GradeService = require('./Service/gradeService')
const Grade = require('./Model/grade')
 const route  = require('./Routing/route')

 const app = express();
 grade = new Grade();
 gradeService = new GradeService();
 var port=5000;
 
 app.use(express.json())
 // app.use(cors())
 app.use(morgan('combined')) 
 app.use(express.urlencoded({extended:true}))
 app.use(validator())
 

app.use(bodyParser.json());
app.use('/',route);
app.listen(port,()=>{
    console.log('Server is running on %s',port);
});
//end