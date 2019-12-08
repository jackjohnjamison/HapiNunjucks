var Routes = [{
  method: 'GET',
  path: '/',
  handler: (request, h) => {

      return h.view('home', {
          title: 'Homepage',
          message: 'Hello Nunjucks!'
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