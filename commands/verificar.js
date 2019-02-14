const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    let role = message.guild.roles.find(role => role.name === 'Não Verificado');
    if (message.channel.name !== 'verificação') return message.reply('You must go to the channel #verification');
    message.member.addRole(role);
    if (message.member.roles.has(role.id)) {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('A tua conta já foi verificada!')
        return message.channel.send((verifyEmbed));
    } else {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('A tua conta foi verificada com sucesso!')
        return message.channel.send((verifyEmbed));
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "verificar",
  category: "Moderação",
  description: "Verifica a tua conta.",
  usage: "verificar"
};
