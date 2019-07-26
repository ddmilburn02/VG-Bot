const { Client, RichEmbed } = require('discord.js');
const client = new Client();
const config = require('config.json')

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'how to embed') {
    const embed = new RichEmbed()
      .setTitle('A slick little embed')
      .setColor(0xFF0000)
      .setDescription('Hello, this is a slick embed!');
    message.channel.send(embed);
  }
});

client.login(config.token);