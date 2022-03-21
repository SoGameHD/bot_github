const prefixCmd = '--';
const {helpCmd, testcurl, ping} = require('./message.js'); // Importe toutes les fonctions nécessaires au fonctionnement des commandes

const message = (msg) => {
   if(!msg.content.startsWith(prefixCmd) || msg.author.bot) return

   const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
   const command = args.shift().toLowerCase();
    
   // !help, liste l'intégralité des commandes disponibles et fonctionnels du Weather Bot
   if(command === "help") {
      helpCmd(msg)
   }

   if(command === "testcurl"){
      testcurl(msg)
   }

   if(command === "ping"){
      ping(msg)
   }
}
module.exports = message;

