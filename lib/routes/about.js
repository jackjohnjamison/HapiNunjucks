route = {
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
        return h.view('about', {
            title: 'About',
            message: "About us :)"
        })
    }
  }

  module.exports = route