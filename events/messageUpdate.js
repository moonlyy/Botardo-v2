const Discord = require("discord.js");

module.exports = (client, oldMessage, newMessage) => {
    if (oldMessage.author.bot) return;
    if (newMessage.author.bot) return;

    const embed = new Discord.MessageEmbed()
        .setTitle("Message updated")
        .setTimestamp()
        .setDescription("Message edited by <@" + oldMessage.author + "> on <#" + oldMessage.channel + ">")
        .setFooter("Tuberías SL", client.user.avatarURL())
        .addField("Old Message:", " → `" + oldMessage.content + "`")
        .addField("New Message:", " → `" + newMessage.content + "`")
        .setThumbnail(null)
        .setURL(null)
        .setAuthor(oldMessage.author.username, oldMessage.author.avatarURL());

    oldMessage.guild.channels.cache
        .find(i => i.name === "➤【🎫】logs")
        .send(embed);
}