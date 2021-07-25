const aoi = require('aoi.js')

const bot = new aoi.Bot({
    token: 'no',
    prefix: 'a$'
})

bot.onMessage()

bot.loadCommands('./commands')

bot.command({
    name: 'load',
    code: `Commands have been reloaded!
$updateCommands`
})

bot.variables({
    Plugin: '',
    Registered: 'false',
    Line: '2'
})
