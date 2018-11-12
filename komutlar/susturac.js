module.exports.run = async (client, msg, args) => {
    if(!msg.member.hasPermission("MANAGE_CHANNELS")) return msg.channel.send({embed: {
      color: Math.floor(Math.random() * (0xFFFFFF + 1)),
      description: (":x:  Yetkin yok!")
    }})
    
                let susturulacak = msg.guild.member(msg.mentions.users.first()) || msg.guild.member(args[0]);
                if(!susturulacak) return msg.channel.send({embed: {
      color: Math.floor(Math.random() * (0xFFFFFF + 1)),
      description: (":x: Bir kiþiyi susturduysan ve bunu kaldýrmak istiyorsan öncelikle o kiþiyi etiketlemelisin.")
    }})
    
                let role = msg.guild.roles.find(r => r.name === "susturulmuþ");
    
              if(!role || !susturulacak.roles.has(role.id)) return msg.channel.send({embed: {
      color: Math.floor(Math.random() * (0xFFFFFF + 1)),
      description: (":x: Bu kullanýcý zaten cezalý deðil.")
    }});
    
              susturulacak.removeRole(role);
              msg.channel.send({embed: {
      color: Math.floor(Math.random() * (0xFFFFFF + 1)),
      description: ("Cezasý baþarýyla kalktý.")
    }})
          }
          
          
          
     exports.conf = {
      enabled: true,
      guildOnly: true,
      aliases: ['unmute'],
      permLevel: 0
    };
    
    exports.help = {
      name: 'susturac',
      description: 'Ýstediðiniz kiþinin eðer susturulduysa susturunu açar.',
      usage: 'susturac'
    };