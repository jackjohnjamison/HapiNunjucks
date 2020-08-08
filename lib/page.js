const masterModel = require('./model/master-model.js')

function getAdditionalModelItems(data) {
    if(data) {
        return masterModel.batch(data)
    } else {
        return null
    }
}

function pageRoute(page) {

    pageData = {
        route: {
            method: 'GET',
            path: page.path,
            handler: (request, h) => {
                view = h.view(page.template, {
                    model: {
                        pageName: page.name || "",
                        title: page.title || "",
                        heading: page.heading || page.title || "",
                        message: page.message || "",
                        links: masterModel.get.links(),
                        data: getAdditionalModelItems(page.data),
                    },
                })

                view.source.context.debug = JSON.stringify(view.source.context)
                return view
            }
        },
        linkText: page.linkText,
        pageName: page.name
    }

    return pageData
}

module.exports = pageRoute

/*/////////////////// 
    ADDING PAGES
///////////////////

    New pages can be added to the routes folder by adding a .js file in the following format.

    const pageRoute = require('../page.js')

    module.exports = pageRoute({
        name: '',
        path: '',
        heading: '',
        template: '',
        title: '',
        message: '',
        linkName: '',
        data: [''],
    })

/*///////////////////