const pageRoute = require('../page.js')

module.exports = pageRoute({
  name: 'home',
  path: '/',
  template: 'home',
  title: 'Homepage',
  message: "It's alive!",
  linkText: 'Home',
})