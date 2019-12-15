const Nunjucks = require('nunjucks')

function getTemplate() {
    return Nunjucks.render(`${__dirname}/mailer.njk`)
}

console.log(getTemplate())

