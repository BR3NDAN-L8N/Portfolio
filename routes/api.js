// Requiring path to so we can use relative routes to our HTML files
const sendEmail = require("../config/email-orm");

module.exports = function (app) {
    app.post("/email/send-email", (req, res) => {

        sendEmail.toAdmin(req.body);
        sendEmail.toUser(req.body);
    });
};