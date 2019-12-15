"use strict"

const model = require('./model/master-model.js')()
//const model = require('./model/master-model.js')()

// const routes = require('./routes.js')
// console.log(routes.autoLinks)

// console.log(routes.autoLinks())
const Nunjucks = require('nunjucks')
const path = require('path')
const APIKEY = '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'

function getTemplate() {
  return Nunjucks.render(path.join(__dirname, '/../templates/mailer.njk'), { 
    model: {
      title: 'Email title',
      links: model.getlinks(),
    }
  })
}

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(APIKEY)

function msg() {
  let message = { 
    to: 'jackofthejamison@hotmail.com',
    from: 'test@jackjohnemail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    // text: getTemplate() + "Text version",
    html: getTemplate() + "HTML version"
  }

  return message
}


function sendMail() {
  sgMail.send(msg())
}

module.exports = sendMail

// Call Path
// node ./lib/send-mail.js