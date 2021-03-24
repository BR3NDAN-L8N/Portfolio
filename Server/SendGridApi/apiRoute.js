const sendEmail = require("./SendGridApi");

module.exports = function (app) {
    app.post("/email/send-email", (req, res) => {
        console.log('body in apiRoute.js', req.body);
        console.log('name in apiRoute.js', req.body.name);
        console.log('email in apiRoute.js', req.body.email);
        console.log('message in apiRoute.js', req.body.message);
        sendEmail.toAdmin(req.body);
        sendEmail.toUser(req.body);

        // sendEmail.toAdmin({"name": "brendan", "email": "br3ndan.l8n@gmail.com", "message": "test message"});
        // sendEmail.toUser({"name": "brendan", "email": "br3ndan.l8n@gmail.com", "message": "test message"});
    });
};