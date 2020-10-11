const sgMail = require('@sendgrid/mail'),
  fs = require("fs"),
  Handlebars = require("handlebars"),
  path = require("path");
require('dotenv').config();

sgMail.setApiKey(process.env.SendGridAPI);

sendEmail = (msg) => {
  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body)
      }
    }
  })();
}

getTemplate = (emailTemplate) => {
  // Open template file
  const chosenTemplate = fs.readFileSync(path.join(__dirname, `../views/email/email-to-${emailTemplate}.handlebars`), 'utf8');
  // Create email generator
  return template = Handlebars.compile(chosenTemplate);
}

toAdmin = ({ email, name, message } = emailData) => {

  const data = {
    email,
    name,
    message
  }

  const template = getTemplate("admin");
  emailHTML = template(data);

  const msg = {
    to: process.env.SendGridAdminEmail,
    from: process.env.SendGridAdminEmail,
    subject: `${name} Might Have A Job For You!`,
    html: emailHTML
  };

  sendEmail(msg);
}

toUser = ({ email, name, message } = emailData) => {

  const data = {
    email,
    name,
    message
  }

  const template = getTemplate("user");
  emailHTML = template(data);

  const msg = {
    to: email,
    from: process.env.SendGridAdminEmail,
    subject: "Your Hiring Journey Is Almost Over!",
    html: emailHTML
  };

  sendEmail(msg);
}

module.exports = {
  toAdmin,
  toUser
};