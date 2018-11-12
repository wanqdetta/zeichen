  const Discord = require('discord.js');

  exports.run = (client, message, args) => {

  const math = require('mathjs');	
  
  exports.run = (client, message, args) => {

        let repo;

        let input = args.join(' ');
      
        try {

      repo = math.eval(input);

        } catch (err) {

      repo = err

        }
	
              const calculatee = new Discord.RichEmbed()
            
                .setColor(0xff0000)
                
                .setDescription(`Sonuç: ❝**${repo}**❞`)
              
              return message.channel.send(calculatee)
  };
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hesapla'],
  permLevel: 0
};

exports.help = {
  name: 'hesap-makinesi',
  description: 'Matematik çarpa/bölme/toplama gibi ilemleri çözer.',
  usage: 'hesapla'
};