module.exports = (client, message) => {

    if (message.author.bot) return;

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);

    if (message.mentions.users.has(client.user.id) && !message.author.bot) {
        const reason = args.join(" ");
        const prefix = message.author.bot;
        if (!reason) return message.channel.send("Cerdito sisoy");
        var facts = ["A mi que me cuentas", "Normal con esa cara", "Obviamente no", "¿Eres gilipollas?", "Podría ser", "Soy fan", "Me gustaría saberlo", "Obviamente me la suda soy porky", "¿Que te esperabas?", "Me gustaría que te callaras", "Ole er betiii", "Viva viva", "sisoy", "A", "¿¡En serio!? No lo sabía", "¿Qué quieres un pin o una chapa?", "Ah bueno temecuidas", "puta tu puta abuela"]
        var fact = Math.floor(Math.random() * facts.length);
        message.channel.send(facts[fact]);
    }

    if (message.content.indexOf(client.config.prefix) !== 0) return;

    if (!cmd) return;

    cmd.run(client, message, args);
};