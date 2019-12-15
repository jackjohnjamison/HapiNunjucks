const Wreck = require('@hapi/wreck')

const isDev = true

let returnData

const requestPosts = async function () {

    const { res, payload } = await Wreck.get('https://jsonplaceholder.typicode.com/posts');
    returnData = payload
    
};

try {
    requestPosts();
}
catch (ex) {
    console.error(ex);
}

function getPosts() {
    let posts = JSON.parse(returnData)
    return posts
}

module.exports = getPosts