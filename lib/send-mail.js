"use strict"
//const nodemailer = require("nodemailer")
const Nunjucks = require('nunjucks')
const path = require('path')
const APIKEY = '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'

function getTemplate() {
    return Nunjucks.render(path.join(__dirname, '/../templates/mailer.njk'))
}

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(APIKEY)
const msg = {
  to: 'jackofthejamison@hotmail.com',
  from: 'test@jackjohnemail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: getTemplate() + "Text version",
  html: getTemplate() + "HTML version"
}

sgMail.send(msg)


// Call Path
// node ./lib/send-mail.js