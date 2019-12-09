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
      path: '/img/{file*}',
      handler: {
      directory: { 
          path: 'public/img'
      }
  }
}]

module.exports = Routes