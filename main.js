const { Client, RichEmbed } = require('discord.js');
const client = new Client();
const config = require('./config.json')

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity('the VG Discord Server.', { type: 'WATCHING' });
});

client.on('message', message => {
/**  if (message.content === 'how to embed') {
    const embed = new RichEmbed()
      .setTitle('A slick little embed')
      .setColor(0xFF0000)
      .setDescription('Hello, this is a slick embed!');
    message.channel.send(embed);
  }
*/
    if (message.content === config.h1) {
      message.delete(1);
      message.channel.send(config.h1a)
    }
    if (message.content === config.h2) {
      message.delete(1);
      message.channel.send(config.h2a)
    }
});

client.login(config.token);