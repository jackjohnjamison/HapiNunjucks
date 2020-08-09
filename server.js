'use strict'

const Path = require('path')
const Inert = require('@hapi/inert')
const Hapi = require('@hapi/hapi')
const Nunjucks = require('nunjucks')
const Vision = require('@hapi/vision')
const Routes = require('./lib/routes.js')

///////////////////////////////////////////////////////////////////////
///// There is some really ugly stuff here getting the port from a -p or -port argument

let portNumber = 3000
const myArgs = process.argv.slice(2)

function setPort(i) {
    let portArgument
    try {
        portArgument = parseInt(myArgs[i + 1])
        if(portArgument) {
            portNumber = portArgument
        } else {
            console.error('Invalid port number')
        }
    } catch {
        console.error('Valid port number not supplied')
    }
}

for (let [i, arg] of myArgs.entries()) {
    switch (arg) {
    case '-port':
        setPort(i)
        break;

    case '-p':
        setPort(i)
        break;

    }
}

////////////////////////////////////////////////////////////////////////////////


const internals = {
    templatePath: '.'
}

internals.rootHandler = function (request, h) {

    const relativePath = Path.relative(`${__dirname}/../..`, `${__dirname}/templates/${internals.templatePath}`)

    return h.view('index', {
        title: `Running ${relativePath} | hapi ${request.server.version}`,
        message: 'Hello Nunjucks!'
    })
};


internals.main = async function () {

    const server = Hapi.Server({ port: portNumber })

    await server.register( [
        Inert,
        Vision
    ] )

    server.views({
        engines: {
            njk: {
                compile: (src, options) => {

                    const template = Nunjucks.compile(src, options.environment)

                    return (context) => {

                        return template.render(context)
                    }
                },

                prepare: (options, next) => {

                    options.compileOptions.environment = Nunjucks.configure(options.path, { watch: false });
                    return next();
                }
            }
        },
        path: `${__dirname}/templates`
    })

    server.route(Routes.routes)

    await server.start()
    console.log('Server is running at ' + server.info.uri)
}

internals.main()


