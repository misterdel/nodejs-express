var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');

var app = express();

const { create } = require('express-handlebars');

// view engine setup
const hbs = create({
    extname: '.hbs',
    defaultLayout: "main"
});

// Register `hbs.engine` with the Express app.
app.engine('hbs', hbs.engine);
app.set('views', './views');

//app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);

// catch 404 and forward to error handler
/** 
app.use(function(req, res, next) {
    next(createError(404));
});
*/
/**
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    // res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
 */

module.exports = app;