const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.js");
client.config = config;
client.queue = new Map()

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Attempting to load command ${commandName}`);
        client.commands.set(commandName, props);
    });
});

client.on("guildMemberAdd", member => {
    member.guild.channels.cache
        .find(i => i.name === "➤【🎫】logs")
        .send({
            embed: {
                color: 'ff7aea',
                description: 'Nuevo usuario: ' + member + '\n» Usuario número **' + member.guild.member.toString()
            }
        });
    member.roles.add(member.guild.roles.cache.find(i => i.name === '☼ Usuario'))
    member.guild.channels.cache.get('816986081974026240').send({
        embed: {
            color: 'ff7aea',
            description: '¡Bienvenido <@' + member + '> a **Tuberías SL**!\n¡Somos **' + member.guild.memberCount.toString() + ' miembros** en el servidor!'
        }
    })
});

client.login("NzcwNTg0MzA4MDMzMjU3NTUy.X5fsjw.WwoLy_Srar4JR1uOBhQL1vNOlA4");