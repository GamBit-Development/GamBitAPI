module.exports = [{
    name: 'mkdir',
    aliases: ['cdir', 'makedir'],
    code: `$customEmoji[check_yes;846833629627416626] Succesfully created a new directory in your plugin! (\`$getGlobalUserVar[Plugin]\`)

$djsEval[
const fs = require('fs')

fs.mkdir('./commands/Plugins/$getGlobalUserVar[Plugin]/$message', (err) => {
  if (err) return err
})]

$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`a$mkdir <folder name>\`)]
$onlyIf[$getGlobalUserVar[Plugin]!=;$customEmoji[check_no;846833629627416626] You havent created a plugin! Create one by using \`a$createplugin <name>\`.]
`
}, {
    name: 'ccmd',
    aliases: ['createcmd', 'ccommand'],
    code: `$customEmoji[check_yes;846833629627416626] Succesfully created a new command with the name of \`$message[3]\` at \`$message[1]/$message[2]\` in your plugin! (\`$getGlobalUserVar[Plugin]\`)

$djsEval[const fs = require('fs')
const msg = \`module.exports = {
name: "$message[3]", 
code: \`$messageSlice[3]

#CHAR#djsEval[const fs = require('fs')
fs.readFile('./commands/Data/$username#$discriminator[$authorID]/installed.json', {encoding: 'utf8'}, (err, data) => {
    if (err) return err
    
    let res = JSON.parse(data)
    for (let i = 0;i < 20;i++) {
      if (!res.installed[i].includes('$getGlobalUserVar[Plugin]')) return;
    }
})
\`
]}
\`


fs.writeFile('./commands/Plugins/$getGlobalUserVar[Plugin]/$message[1]/$message[2]', msg, (err) => {
  if (err) return err
})
]

$argsCheck[>4;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`a$ccmd <path> <filename.extension> <command name> <code>\`)]
$onlyIf[$getGlobalUserVar[Plugin]!=;$customEmoji[check_no;846833629627416626] You havent created a plugin! Create one by using \`a$createplugin <name>\`.]`
}, {
    name: 'dcmd',
    aliases: ['dcommand', 'delcommand'],
    code: `$customEmoji[check_yes;846833629627416626] Succesfully removed command in path \`$message\`!
$exec[rm -rf commands/Plugins/$getGlobalUserVar[Plugin]/$message]

$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`a$rcmd <path>\`)]
$onlyIf[$getGlobalUserVar[Plugin]!=;$customEmoji[check_no;846833629627416626] You havent created a plugin! Create one by using \`a$createplugin <name>\`.]
`
}, {
    name: 'ef',
    aliases: ['editfile', 'efile'],
    code: `$customEmoji[check_yes;846833629627416626] Succesfully changed the file content!
$djsEval[const fs = require('fs')
const content = 'module.exports = {name: '$message[2]', code: \`$messageSlice[2]\`}'

fs.writeFile('./commands/Plugins/$getGlobalUserVar[Plugin]/$message[1]', content, (err) => {
  if (err) return err
})
]

$argsCheck[>2;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`a$ecmd <path> <new name> <new code>\`)
$onlyIf[$getGlobalUserVar[Plugin]!=;$customEmoji[check_no;846833629627416626] You havent created a plugin! Create one by using \`a$createplugin <name>\`.]`
}, {
    name: 'sfc',
    aliases: ['seefilecontent', 'sfcontent'],
    code: `$title[$message]
$description[\`\`\`$djsEval[
const fs = require('fs')

fs.readFile('./commands/Plugins/$getGlobalUserVar[Plugin]/$message', {encoding: 'utf8'}, (err, data) => {
  if (err) return err
  return data
})
;yes]\`\`\`]
$footer[$username;$authorAvatar]
$addTimestamp
$color[WHITE]

$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`a$sfc <path>\`)]
$onlyIf[$getGlobalUserVar[Plugin]!=;$customEmoji[check_no;846833629627416626] You havent created a plugin! Create one by using \`a$createplugin <name>\`.]
`
}]