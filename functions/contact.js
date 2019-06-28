var aws = require("aws-sdk")
aws.config.loadFromPath("./AwsConfig.json")
var nodemailer = require("nodemailer")

var ses = new aws.SES()

exports.handler = (event, context, callback) => {
  const { emailAddress } = JSON.parse(event.body)
  var mailOptions = {
    from: "bradjnelson14@gmail.com",
    subject: "Email sent from lambda!",
    html: `<p>
   You got a message from: <b>${emailAddress}</b> 
   </p> `,
    to: "bradjnelson14@gmail.com",
  }

  var transporter = nodemailer.createTransport({
    SES: ses,
  })

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log("Error sending mail...")
      callback(err)
    } else {
      console.log("Email sent successfully!")
      callback()
    }
  })
}
