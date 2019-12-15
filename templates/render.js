const Nunjucks = require('nunjucks')

function getTemplate() {
    return Nunjucks.render(`${__dirname}/mailer.njk`, { title: 'Email title'})
}

// console.log(getTemplate())

