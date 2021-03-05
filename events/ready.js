module.exports = (client) => {
    console.log('Logged in as ' + client.user.tag)
    client.user.setActivity('shitposting as lifestyle', { type: 'PLAYING' });
}