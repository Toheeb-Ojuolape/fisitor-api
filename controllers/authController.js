var nodemailer = require('nodemailer');
module.exports.mail_post = async(req,res) =>{
  var mail = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: 'trotsupplies@gmail.com',
      pass: 'cjtxrkfwnubsmgkl'
    }
  });

  var mailOptions = {
    from: req.body.from,
    to: req.body.email,
    replyTo:req.body.replyTo,
    subject: req.body.title,
    html: req.body.message
  };

  mail.sendMail(mailOptions, function(error, info){
    if (error) {
      res.send(error)
      console.log(error);
      return
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent: ' + info.response)
      return
    }
  });

}