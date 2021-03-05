const Discord = require('discord.js')
const db = require('megadb');
let prefix_db = new db.crearDB('prefixes');

module.exports = {
    nombre: 'test',
    alias: [],
    descripcion: 'Comando de prueba',
    run: (client, message, args) => {
        const embedDatos = new Discord.MessageEmbed()
            .setTitle("REGLAS")
            .setAuthor("Tuberías SL | Reglas", client.user.avatarURL())
            .setColor(0x00ae86)
            .setDescription(" ")
            .setFooter("Tuberías on top", client.user.avatarURL())
            .setThumbnail(null)
            .setTimestamp()
            .setURL(null)
            .addField(
                "Se respetuoso",
                "Evitar la tóxicidad, ya sabéis, tóxicidad fuera, mala vibra fuera."
            )
            .addField(
                "NSFW",
                "Oye que hay menores evitar el NSFW bros."
            )
            .addField(
                "Memes",
                "Los memes a memes no es muy complicado macho."
            )
            .addField(
                "Spam",
                "Si vas a hacer spam hazlo en Media porfavor"
            )
            .addField(
                "Incumplimiento de reglas",
                "Si no las cumples el propio dueño alomejor te puto funa del discord."
            );
        message.delete();
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("El canal es: <#>")
        message.channel.send(embedDatos)
    }
}