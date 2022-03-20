const { MessageEmbed } = require("discord.js");                   // Ici, on viens initialiser toutes les variables utiles
const g_token  = process.env.GITHUB_TOKEN;                       // à nos fonctions (ex. le token)
// const api_github = require('octokit');                      

// helpcmd function : displays a complete list of available commands
function helpCmd(msg) {
    const embed = new MessageEmbed()
        .setTitle('Command list :')
        .setDescription('')
        .addFields(
            { name: '\u200B', value: '\u200B' }, // Passages de lignes pour créer de l'espace
            { name: '--help', value: 'Display this help' },
            { name: '--testcurl', value: 'testing pure API fetch with cURL' }
        );
    msg.channel.send({ embeds: [embed] });
}

function testcurl(msg){
    var url = "https://api.github.com/users/Snowballe";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
       console.log(xhr.status);
       console.log(xhr.responseText);
    }};
const a = xhr.responseText;
    xhr.send();
    msg.channel.send({a :['avatar_url']});
}


function ping(msg){
    msg.channel.send('pong');
}
module.exports = {helpCmd, ping, testcurl}; // Exporte les différentes fonctions du fichier