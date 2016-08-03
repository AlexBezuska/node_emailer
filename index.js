var nodemailer = require('nodemailer');

// see credentials_sample.js for example
var credentials = require('./credentials.js');

var transporter = nodemailer.createTransport(credentials.proticol + '://' + credentials.username + '%40' + credentials.email_domain + ':' + credentials.password + '@' + credentials.server);

// see mail_options_sample.js for example
var mailOptions = require('./mail_options.js');

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
