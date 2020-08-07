const pageRoute = require('../page.js')

module.exports = pageRoute({
  path: '/',
  template: 'home',
  title: 'Homepage',
  message: "It's alive!",
  linkName: 'Home',
})