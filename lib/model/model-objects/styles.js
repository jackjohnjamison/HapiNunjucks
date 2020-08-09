const fs = require('fs')
const path = require('path')
const filePath = '././assets/dist/css/'
const fileExtension = '.css'

const styles = {}

fs.readdirSync(filePath).forEach(fileName => {
    if (path.extname(filePath + fileName) === fileExtension ) {
        const cssString = fs.readFileSync((filePath + fileName), 'utf8')
        const itemName = fileName.replace(fileExtension, "")
        styles[itemName] = cssString
    }
})

module.exports = styles