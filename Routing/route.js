const express = require('express')
const validator = require('express-validator')
const Grade = require('../Model/grade')
const GradeService = require('../Service/gradeService')

const router  = express.Router();
grade = new Grade();
gradeService = new GradeService();

router.use(express.urlencoded({extended:true}));
router.use(validator());

router.get('/:id',function(req,res){
   grade=  gradeService.getGrade(req.params.id)
    res.send(grade)
})

router.post('/',function(req,res){
    console.log("pos")
    req.assert('id','Person ID can not be empty').notEmpty();
        var errors = req.validationErrors();
        if(errors) res.send({errors:errors})
        else {
        gradeService.addGrade(req.body.id,req.body.name,req.body.course,req.body.grade)
         res.end();
        }})

router.put('/:id',function(req,res){
    let grade  = new Grade(req.body.id,req.body.name,req.body.course,req.body.grade)
    gradeService.putGrade(grade)
     res.send(req.params.id)
     res.end()
})

router.delete('/:id',function(req,res){
    gradeService.deleteGrade(req.params.id)
    res.end()
})

module.exports = router;