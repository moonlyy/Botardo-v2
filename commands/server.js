const Discord = require('discord.js')
const db = require('megadb');
let prefix_db = new db.crearDB('prefixes');

module.exports = {
    nombre: 'debug',
    alias: [],
    descripcion: 'not shown for everyone',
    run: (client, message, args) => {
        var unai = message.guild.members.cache.get("511956559186886666");
        if (message.member.id != unai) return;
        var server = message.guild;
        let ping = Math.floor(message.client.ws.ping);

        const embed = new Discord.MessageEmbed()
            .setThumbnail(server.iconURL())
            .setAuthor(server.name, server.iconURL())
            .addField('ID', server.id)
            .addField('Region', server.region)
            .addField('Creado el', server.joinedAt.toDateString())
            .addField('Dueño del Servidor', "<@" + server.ownerID + ">")
            .addField('Miembros', server.memberCount + " miembros")
            .addField('Ping', ping + "ms")
            .setColor('ff7aea')

        message.member.send(embed);
        message.delete();
    }
}