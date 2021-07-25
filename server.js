const aoi = require('aoi.js')

const bot = new aoi.Bot({
    token: 'ODYzNjQzMzg3MDY3MjM2MzUy.YOp4lQ.1OdKdIDHoHKayN9U7-rKhnTGkiA',
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