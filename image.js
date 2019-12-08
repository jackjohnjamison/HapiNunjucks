const Hapi = require('@hapi/hapi')

// create new server instance
const server = new Hapi.Server({  
  host: 'localhost',
  port: 3000
})

async function liftOff () {  
  await server.register({
    plugin: require('@hapi/inert')
  })

  server.route({  
    method: 'GET',
    path: '/{file*}',
    handler: {
      directory: { 
        path: 'public'
      }
    }
  })

  await server.start()
  console.log('Server started at: ' + server.info.uri)
}

liftOff()  