module.exports = {
    name: 'install',
    aliases: ['i'],
    code: `$sendMessage[$customEmoji[check_yes;846833629627416626] Finished instalation of \`$message\`! (Took \`$executionTime miliseconds\`)]
$djsEval[var fs = require('fs');

var data = fs.readFileSync('./commands/Data/$username#$discriminator[$authorID]/installed.json').toString().split("\n");
data.splice('$getGlobalUserVar[Line]', 0, "    \"$message\",");
var text = data.join("\n");

fs.writeFile('./commands/Data/$username#$discriminator[$authorID]/installed.json', text, function (err) {
  if (err) return console.log(err);
});

]
$sendMessage[$customEmoji[load;846833629627416626] Executing file creation scripts. This shouldn't take too much time.]
$sendMessage[$customEmoji[load;846833629627416626] Starting instalation of \`$message\`...]

$onlyIf[$getGlobalUserVar[Registered]==true;$customEmoji[check_no;846833629627416626] You are not registered. Please register using \`a$register\` (This is used to create the user data file).]
`
}