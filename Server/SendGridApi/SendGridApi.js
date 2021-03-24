require('dotenv').config();
const sgMail = require('@sendgrid/mail'),
    fs = require("fs"),
    Handlebars = require("handlebars"),
    path = require("path");

sgMail.setApiKey(process.env.SendGridApiKey);

const sendEmail = (msg) => {
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

const getTemplate = (emailTemplate) => {
    // Open template file
    const chosenTemplate = fs.readFileSync(path.join(__dirname, `./email-templates/to-${emailTemplate}.handlebars`), 'utf8');
    // Create email generator
    return template = Handlebars.compile(chosenTemplate);
}

const toAdmin = (emailData) => {

    const data = {
        email: emailData.email,
        name: emailData.name,
        message: emailData.message
    }

    const template = getTemplate("admin");
    const emailHTML = template(data);

    const msg = {
        to: process.env.SendGridAdminEmail,
        from: process.env.SendGridAdminEmail,
        subject: `*** JOB JOB JOB ***`,
        html: emailHTML
    };

    sendEmail(msg);
}

const toUser = (emailData) => {

    const data = {
        email: emailData.email,
        name: emailData.name,
        message: emailData.message
    }

    const template = getTemplate("user");
    const emailHTML = template(data);

    const msg = {
        to: data.email,
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