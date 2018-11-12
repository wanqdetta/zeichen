const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Tavsiye vermeyi unuttun.');
    message.channel.send({embed: {
        color: 3447003,
        description: "Tavsiyeni gonderdim ! En kisa 3 gunde size donus olacak :white_check_mark: \nSpam yazmayiniz aksi takdirde bloke edilirsin."
      }});
    let str = "<@307454426384302082>";
    let id = str.replace(/[<@!>]/g, '');
    client.fetchUser(id)
        .then(user => {user.send(`Tavsiye : **${mesaj}**\n\nGonderen: **${message.author.username}**`)})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tavsiye',
  description: 'tavsiye',
  usage: 'tavsiye [yazý]'
};