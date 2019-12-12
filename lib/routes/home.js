pageData = {
    route: {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
          return h.view('home', {
              title: 'Homepage',
              message: "It's alive!"
            })
        }
    },
    linkName: 'Home'
}

module.exports = pageData