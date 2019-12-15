const sendMail = require('../send-mail.js')

pageData = {
    route: {
      method: 'GET',
      path: '/mailer',
      handler: (request, h) => {return h.view('mailer', {
        send: sendMail(),
        model: {
          sendMail:'',
      }})
    }
  }
}

module.exports = pageData
