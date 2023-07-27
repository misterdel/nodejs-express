var express = require('express');

var router = express.Router();

/** send email function */
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: 'mistertutty@gmail.com',
        pass: 'realpasswordforaboveaccount'
    }
}));



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home');
});

/** GET details page */
router.get('/portfolio-details', function(req, res, next) {
    res.render('portfolio-details');
});


/** post details page */
router.post('/send-email', function(req, res, next) {
    console.log('chegou');
    console.log(req.body);

    var mailOptions = {
        from: 'mistertutty@gmail.com',
        to: req.body.emails,
        subject: req.body.subject,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    //  main(req.body.emails, req.body.subject, req.body.message).catch(console.error);
    res.render('email-page');
});




module.exports = router;