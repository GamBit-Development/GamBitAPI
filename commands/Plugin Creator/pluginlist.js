module.exports = {
    name: 'pluginlist',
    code: `$djsEval[const fs = require('fs')
fs.readdir('./commands/Plugins', {encoding: 'utf8'}, (err, files) => {
      if (err) throw err
      for (let i = 0;i < 8;i++) {
    if (files[i] === undefined) {
      break
    }

    fs.readFile('./commands/Plugins/'+files[i]+'/config.json', {encoding: 'utf8'}, (err, data) => {
          global.res = JSON.parse(data)
          message.channel.send(\`${global.res.name} (By: ${global.res.author})
		  ${global.res.description}
		  Version ${global.res.version}\n\`)
    })
  }
})


;yes]`
}