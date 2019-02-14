const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    
    // Array of responses
    let responses = [
        'Aprovado!',
        'Claro!',
        'Nope.',
        'Não',
        'Talvez',
        'Um dia...',
        'Não vi isso acontecer!',
        'Não tenho ideia'
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
    
    // Form Embed
    const embed = new Discord.MessageEmbed()
        .setColor(0xffffff)
        .setFooter(fetched);
    
    // Send Embed
    message.channel.send(embed);
    
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["8"],
  permLevel: "User"
};

exports.help = {
  name: "8ball",
  category: "Diversão",
  description: "Mostra uma resposta negativa ou positiva a uma questão.",
  usage: "8ball [pergunta]"
};
