const Discord = require('discord.js')

module.exports = (client, message) => {
    if (message.author.bot) return;

    const embed = new Discord.MessageEmbed()
        .setTitle("Message deleted")
        .setTimestamp()
        .setDescription("Message deleted by <@" + message.author + "> on <#" + message.channel + ">")
        .setFooter("Tuberías SL", client.user.avatarURL())
        .addField("Message:", " → `" + message.content + "`")
        .setThumbnail(null)
        .setURL(null)
        .setAuthor(message.author.username, message.author.avatarURL());

    message.guild.channels.cache
        .find(i => i.name === "➤【🎫】logs")
        .send(embed);
}