
var spawn = require('child_process').spawn;
let {PythonShell} = require('python-shell')
class TextChange {
  //[get]   course/create 
  create(req, res) {
     //console.log(req.query);
    //  const sensor = spawn('python', ['../test.py']);
    //  sensor.stdout.on('data', function(data) {
    //       // convert Buffer object to Float
    //       console.log(data.toString());
    //   });
    //   console.log("kk");
    PythonShell.run('test.py', null, function (err, data) {
      if (err) throw err;
      console.log(data);
    });
  }
  
}

module.exports = new TextChange;