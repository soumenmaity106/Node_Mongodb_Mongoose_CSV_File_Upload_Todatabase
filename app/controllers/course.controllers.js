const Course = require('../model/author');

exports.findAll = (req,res) =>{
    Course.find()
    .then(course=>{
        if(course.length <= 0){
            return res.status(404).send({
                message:"Course database Empity"
            })
        }
        res.send({
            Count:course.length,
            Course:course
        })
    })
    .catch(
        err => {
            res.status(500).send({
                message: err.message
            });
        }
    )
}