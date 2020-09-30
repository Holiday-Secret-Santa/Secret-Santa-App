"use strict";
require("dotenv").config();
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function invitationEmail(
	email,
	planner,
	description,
	date,
	start_time,
	location,
	EventId,
	ParticipantId
) {
	console.log("Testing: this is the email " + email);
	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		service: "Gmail",
		auth: {
			user: process.env.GMAIL_USER,
			pass: process.env.GMAIL_PASSWORD,
		},
		tls: {
			rejectUnauthorized: false,
		},
		secure: false,
	});

	// send mail with defined transport object
	let info = await transporter.sendMail(
		{
			from: '"Secret Santa App" <secretsanta.partyapp@gmail.com>', // sender address
			to: `${email}`, // list of receivers
			subject: `Someone sent you a Secret Santa invitation!`, // Subject line
			text: " ", // plain text body - nothing included here at this time
			html: `<b>
		<h1>You are invited the ${description} Secret Santa Party!</h>
		<p>${planner} sent you a Secret Santa invitation. Here Secret Santa Party information.</p>
		<li>
			<ul>Date: ${date}</ul>
			<ul>Time: ${start_time}</ul>
			<ul>Location: ${location}</ul>
		</li>

		<p>Please let your host know if you plan on attending this Secret Santa event by 
		clicking on the link provided below to RSVP for the event. The link provided below will
		redirect you to the Secret Santa App platform.</p>

		<li>
			<ul><a href="https://secret-santa-platform.herokuapp.com/events/${eventId}/rsvp/${ParticipantId}">
			Secret Santa App on Heroku</a></ul>
		</li>
        </b>`, // html body
		},
		(err, success) => {
			if (err) {
				console.log(err);
			} else {
				console.log(success);
			}
		}
	);

	// console.log("Message sent: %s", info.messageId);
	// // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

module.exports = invitationEmail;
