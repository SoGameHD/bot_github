const { MessageEmbed } = require("discord.js");  
const axios = require('axios');  
const octokit=require('octokit');               // Ici, on viens initialiser toutes les variables utiles
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
    

// Make a request for a user with a given ID
axios.get('https://api.github.com/users/Snowballe')
  .then(function (response) {

    msg.channel.send(response['data']['avatar_url'])
    console.log(response);
  })
  .catch(function (error) {
    msg.channel.send("Snif ça n'a pas marché, erreur :"+ error)
    console.log(error);
  })
  .then(function () {
    msg.channel.send("le curl a marché !");
  });
    
}


function ping(msg){
    msg.channel.send('pong');
}
module.exports = {helpCmd, ping, testcurl}; // Exporte les différentes fonctions du fichier