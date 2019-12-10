let jsonTest = require('./json-test.js') // test!

var Routes = [
  {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
          return h.view('home', {
              title: 'Homepage',
              message: "It's alive!"
          })
      }
  },
  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
        return h.view('about', {
            title: 'About',
            message: "About us :)"
        })
    }
  },
  {
    method: 'GET',
    path: '/posts',
    handler: (request, h) => {
        return h.view('posts', {
            title: 'Posts',
            message: "Check out these Json posts bro",
            postsAllContent: jsonTest(),
        })
    }
  },
  {  
      method: 'GET',
      path: '/{file*}',
      handler: {
      directory: { 
          path: 'public/'
      }
  }
}]

module.exports = Routes