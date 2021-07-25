module.exports = {
    name: 'createplugin',
    code: `$customEmoji[check_yes;846833629627416626] Plugin \`$message\` Created Successfully!

$djsEval[const fs = require('fs')

const content = \`{
	"name": "$message",
	"description": "",
	"version": "1.0.0",
	"author": "$username#$discriminator[$authorID]"
}\`

fs.mkdir('./commands/Plugins/$message', (err) => {
  if (err) return err
})

fs.writeFile('./commands/Plugins/$getGlobalUserVar[Plugin]/config.json', content, (err) => {
  if (err) return err
})]


$setGlobalUserVar[Plugin;$message]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`a$createplugin <name>\`)]
`
}