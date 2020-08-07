pageData = {
  route: {
    method: 'GET',
    path: '/{file*}',
    handler: {
      directory: { 
        path: 'assets/dist/'
      }
    }
  }
}

module.exports = pageData