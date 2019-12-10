// const request = require('request')

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

// module.exports = json

const Wreck = require('@hapi/wreck');

let returnData

const example = async function () {

    const { res, payload } = await Wreck.get('https://jsonplaceholder.typicode.com/posts');
    console.log('I ran')
    returnData = payload
    
};

try {
    example();
}
catch (ex) {
    console.error(ex);
}

function giveData() {
    return JSON.parse(returnData)
}

module.exports = giveData