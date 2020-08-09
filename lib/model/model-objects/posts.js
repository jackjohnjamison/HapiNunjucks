const Wreck = require('@hapi/wreck')

let returnData = {}

const requestPosts = async function () {
    const { res, payload } = await Wreck.get('https://jsonplaceholder.typicode.com/posts')
    returnData = payload
}

try {
    requestPosts()
}
catch (ex) {
    console.error(ex)
}

function getPosts() {
    let posts = null
    try {
        posts = JSON.parse(returnData)
    } catch {
        console.error("Json Placeholder returned invalid data")
        console.error(returnData)
    }

    return posts
}

module.exports = getPosts