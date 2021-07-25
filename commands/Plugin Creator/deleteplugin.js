module.exports = {
    name: 'delplugin',
    aliases: ['deleteplugin'],
    code: `$customEmoji[check_yes;846833629627416626] Succesfully deleted plugin \`$message\`!
$exec[rm -rf commands/Plugins/$message]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`a$delplugin <plugin name>\`)`
}