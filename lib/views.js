const Nunjucks = require('nunjucks')

Views = {
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
    
    path: './templates'
}

module.exports = Views