var app = require('express')();
var fileUpload = require('express-fileupload');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000 
 
app.use(fileUpload());
 

 
mongoose.connect('mongodb://soumen:soumen123@ds139425.mlab.com:39425/shop-api',{ useNewUrlParser: true });

//Route
require('./app/routes/course.route')(app)
 
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
 
var template = require('./template.js');
app.get('/template', template.get);
 
var upload = require('./upload.js');
app.post('/', upload.post);

app.listen(port,()=>{
  console.log(`Connect port ${port}`)
})