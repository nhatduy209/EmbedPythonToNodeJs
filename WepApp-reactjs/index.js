var express = require("express");
var path = require('path');
var exphbs = require('express-handlebars');
var app = express();


// khai báo sử dụng engine 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// khai báo views nằm trong đường dẫn nào 
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public')); // các request customer gửi lên thì vào public tìm
console.log(path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))  //  sử dụng để gửi giá trị tới server
app.use(express.json());
app.listen(3000); // mở cổng để customer gọi server 


// gọi function route 
const route = require('./routes');

route(app)

