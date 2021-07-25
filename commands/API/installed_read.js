const fs = require('fs')

function read() {
fs.readFile('./commands/Data/$username#$discriminator[$authorID]/installed.json', {encoding: 'utf8'}, (err, data) => {
    if (err) return err
    
    let res = JSON.parse(data)
    for (let i = 0;i < 20;i++) {
      return res.installed[i]
    }
})
}

module.exports = read