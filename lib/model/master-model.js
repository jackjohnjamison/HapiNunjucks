const fs = require('fs')
const path = require('path')
const filePath = './lib/model/model-objects/'
const fileExtension = '.js'

let masterModel = {
    get:{},
    batch: (modelItems) => {
        const getFunctionsObject = {}
        modelItems.forEach(item => {
            try {
                getFunctionsObject[item] = masterModel.get[item]()
            } catch(error) {
                console.error(error, +': ' + item + 'does not exist in the master model, check that that name is correct.')
            }
        })
    
        return getFunctionsObject
    }
}

fs.readdirSync(filePath).forEach(fileName => {
    if ( path.extname(filePath + fileName) === fileExtension ) {
        let modelData = require('./model-objects/' + fileName)
        let itemName = fileName.replace(fileExtension, "")
        masterModel.get[itemName] = modelData
    }
})

module.exports = masterModel