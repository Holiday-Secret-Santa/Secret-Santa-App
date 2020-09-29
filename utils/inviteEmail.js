// template for email invitation
"use strict";
require("dotenv").config();
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function invitationEmail() {
	// Generate test SMTP service account from ethereal.email
	// Only needed if you don't have a real mail account for testing
	let testAccount = await nodemailer.createTestAccount();

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		service: "Gmail",
		// port: 587,
		// secure: false, // true for 465, false for other ports
		auth: {
			user: process.env.GMAIL_USER, // generated ethereal user
			pass: process.env.GMAIL_PASSWORD, // generated ethereal password
		},
	});

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: '"Secret Santa" <secretsanta.partyapp@gmail.com>', // sender address
		to: `${email}`, // list of receivers
		subject: "(Organizer) sent you a Secret Santa invitation!", // Subject line
		text: " ", // plain text body - nothing included here at this time
		html: `<b>
        <h1>${organizer} has invited you to the the ${desciption} Secret Santa Party!</h>
        </b>`, // html body
	});

	console.log("Message sent: %s", info.messageId);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = invitationEmail;
