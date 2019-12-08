'use strict';

const Path = require('path')
const Hapi = require('@hapi/hapi')
const Nunjucks = require('nunjucks')

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.register( require('@hapi/vision') );

    server.views({
        engines: {
            njk: {
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

        path: `${__dirname}/templates`
    })

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return h.view('home', {
                title: 'Homepage',
                message: 'Hello Nunjucks!'
            });
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();