const Discord = require('discord.js')
const db = require('megadb');
let prefix_db = new db.crearDB('prefixes');

module.exports = {
    nombre: '8ball',
    alias: [],
    descripcion: 'Pregunta alguna cosa al 8ball',
    run: (client, message, args) => {
        let pregunta = args.join(" ");
        if (!pregunta) return message.reply("Pregunta algo, no puedes preguntar: 'nada'.");
        let respuesta = ["Sí", "No", "Tal vez", "No sé", "Definitivamente si", "Definitivamente no", "¡Claro!", "Por supuesto!", "Por supuesto que no"]
        var random = respuesta[Math.floor(Math.random() * respuesta.length)]
        const embed = new Discord.MessageEmbed()
            .setTitle(":8ball: **Pregunta**")
            .addField("" + args.join(" ") + "", random)
            .setColor("ff7aea")
        message.channel.send(embed)
    }
}