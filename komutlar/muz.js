const Discord = require('discord.js');
let talkedRecently = new Set();

function get_random(list) {
  return list[Math.floor((Math.random() * list.length))];
};

exports.run = (client, message, args) => {
	
        if (!message.guild) {
        return message.author.send("Bu komutu lütfen bir sunucuda deneyin."); }

        if (message.channel.type !== 'dm') {

  var cm = ["-1","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35"];
  var sonuc = get_random(cm);
  // Banana;
  message.channel.send("Düşünüyorum...").then(async msg => {
    
            setTimeout(() => {
    
                msg.edit(`Hmm, **${message.author.username}** senin muzun \`${sonuc}cm\`!`);
    
            }, 1100);

    });

  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [`banana`,`mybanana`,`my-banana`],
  permLevel: 0
};

exports.help = {
  name: 'muzum',
  description: 'Muz boyutunu tahmin eder.',
  usage: 'muz'
};