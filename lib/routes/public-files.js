pageData = {
  route: {
    method: 'GET',
    path: '/{file*}',
    handler: {
      directory: { 
        path: 'public/'
      }
    }
  }
}

module.exports = pageData