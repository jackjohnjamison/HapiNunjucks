const Wreck = require('@hapi/wreck');

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
    return JSON.parse(returnData)
}

module.exports = getPosts