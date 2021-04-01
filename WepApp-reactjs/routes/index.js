
var ChangeText = require('./ChangeText');

function route(app) {
    app.get("/", function (req, res)// req là param khách hàng gửi lên 
    // res là param server trả về
    {
        res.render('course');  // main.handelbars
    });

    app.get('/change',ChangeText)

    // app.post('/change', function(req, res){
    //     console.log(req.body);
    // });
}

module.exports = route