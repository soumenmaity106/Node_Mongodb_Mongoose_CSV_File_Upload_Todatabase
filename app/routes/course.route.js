module.exports = function(app){
   const courselist = require('../controllers/course.controllers');

    //Retrive all courselist
    app.get('/api/course',courselist.findAll)

}