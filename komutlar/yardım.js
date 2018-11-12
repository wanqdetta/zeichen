const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `+banned = Dene ve Gör! \n__**YENİ!!**__  +havadurumu = Yazdıgınız Şehirin Hava Durumunu Gösterir! \n__**YENİ!!**__  +söv = Etiketlediginiz Kişiye Söver!. \n+muzum = Muzun Kaç Cm Onu Gçsterir xD! \n__**YENİ!!**__  +mcbasari = McBasari Tipinde YAZAR!! \n+avatarım = Avatarınınızı Gösterir.\n__**YENİ!!**__  +sunucutanit = Botun Ana Sunucusunu Atar! \n+ortaparmak = Orta Parmak GİF Atar.\n__**YENİ!!**__  +emojiyazi = Yazdıgınız Herşeyi Emojili Atar! \n+windows = Windows 10 GİF Atar. \n+youtube = Bot Sahibinin Youtube Kanalını Atar. \n+herkesebendençay = Herkese Çay Alırsınız. \n+koş = Koşarsınız.\n+çayiç = Çay İçersiniz. \n+çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \n+çayaşekerat = Çaya Şeker Atarsınız. \n+yumruh-at = Yumruk Atarsınız. \n+yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \n+sunucuresmi = BOT Sunucunun Resmini Atar. \n+sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \n+kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Sunucu Yetkilisi Komutları**", `+ban = İstediğiniz Kişiyi Sunucudan Banlar. \n+uyar  = İstediniz Kişiyi uyarırsınız #mod-log kanalı oollması lazm \n+kilit  = İstediniz Kanalı Kilitler! \n+kick  = İstediğiniz Kişiyi Sunucudan Atar. \n+unban = İstediğiniz Kişinin Yasağını Açar. \n+sustur = İstediğiniz Kişiyi Susturur. +MUTED+ \n+oylama = Oylama Açar. \n+duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Botun Ana Komutları**", "+yardım = BOT Komutlarını Atar. \n+bilgi = BOT Kendisi Hakkında Bilgi Verir. \n+tavsiye = Botun sahibine verdiğiniz tavsiyeyi gönderir. \n+ping = BOT Gecikme Süresini Söyler. \n+davet = BOT Davet Linkini Atar. \n+istatistik = BOT İstatistiklerini Atar.")
  .addField("**BOT Yapımcı Komutları:**", "**+duyuruemuq = Bot Sahibine Özel Duyuru!** ")
  .setFooter('**Bu Bot Pyzorex Tarafından Yapılmıştır.**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
