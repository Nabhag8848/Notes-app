const fs = require('fs')
// const book = {
    
//     title:'RD SHARMA',
//     author:'RDS'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)
// // console.log(bookJSON)


// const parseData = JSON.parse(bookJSON)
// console.log(parseData.title)


// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "Nabhag"
data.age = 18

const newdataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',newdataJSON)