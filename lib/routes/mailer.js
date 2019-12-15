// const sendMail = require('../send-mail.js')
// const routes = require('../routes.js')
// console.log(sendMail)



pageData = {
    route: {
      method: 'GET',
      path: '/mailer',
      handler: (request, h) => {return h.view('mailer', {model: {
          sendMail:'' // sendMail()
      }})}
    }
}

module.exports = pageData
