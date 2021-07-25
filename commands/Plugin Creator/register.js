module.exports = {
    name: 'register',
    aliases: ['reg', 'regis'],
    code: `$customEmoji[check_yes;846833629627416626] Succesfully registered! You can now install and create plugins!
$setGlobalUserVar[Registered;true]

$djsEval[const fs = require('fs')

let text = \`
{
  "installed": [{

  }]
}\`

fs.mkdir('./commands/Data/$username#$discriminator[$authorID]', (err) => {
  if (err) return err
})

fs.writeFile('./commands/Data/$username#$discriminator[$authorID]/installed.json', text, (err) => {
	if (err) throw err
})
]

$onlyIf[$getGlobalUserVar[Registered]==false;$customEmoji[check_no;846833629627416626] You are already registered!]`
}