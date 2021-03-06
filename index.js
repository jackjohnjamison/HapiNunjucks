'use strict'

const Path = require('path')
const Inert = require('@hapi/inert')
const Hapi = require('@hapi/hapi')
const Nunjucks = require('nunjucks')
const Vision = require('@hapi/vision')
const Routes = require('./lib/routes.js')


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

    const server = Hapi.Server({ port: 3000 })

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


