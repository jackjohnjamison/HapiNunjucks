'use strict';

const Hapi = require('@hapi/hapi')
const Inert = require('@hapi/inert')
const Vision = require('@hapi/vision')
const Routes = require('./lib/routes.js')
const Views = require('./lib/views.js')

const Nunjucks = require('nunjucks')

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.register( [
        Inert,
        Vision
    ] )

    server.views({
        engines: {
            njk: {
                configure: ("templates"),
                compile: (src, options) => {
                    const template = Nunjucks.compile(src, options.envronment);
                    return context => {
                        return template.render(context);
                    };
                },
    
                prepare: (options, next) => {
                    options.compileOptions.environment = Nunjucks.configure(options.path, { watch: false });
                    return next();
                }
            }
        },
        
        relativeTo: __dirname,
        path: 'templates'
    })
    server.route(Routes)

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();