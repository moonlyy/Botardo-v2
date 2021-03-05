const Discord = require('discord.js')
const db = require('megadb');
let prefix_db = new db.crearDB('prefixes');

module.exports = {
    nombre: 'Ban',
    alias: [],
    descripcion: 'Funa a tus compañeros bro',
    run: (client, message, args) => {
        let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No tienes permisos bro").then(msg => { setTimeout(() => { msg.delete() }, 15000) })
        message.channel.send({
            embed: {
                color: 3447003,
                description: "" + args[0] + " ha sido funado por gilipollas"
            }
        });
        user.send("> Creo que te has resbalado del discord bro!")
        setTimeout(() => {
            user.ban({ reason: "Funado chavalito" });
        }, 150)
    }
}