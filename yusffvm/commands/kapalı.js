const { EmbedBuilder: _0x1a2b, ApplicationCommandType: _0x3c4d, PermissionsBitField: _0x5e6f } = require('discord.js');

module.exports = {
    data: {
        name: 'kapalı',
        description: 'Sunucu kapalı mesajı atar',
        type: _0x3c4d.ChatInput,
    },
    async execute(_0x7a8b) {
        if (!_0x7a8b.member.permissions.has(_0x5e6f.Flags.Administrator)) {
            return _0x7a8b.reply({ content: 'Bu komutu çalıştırmak için yeterli yetkin yok!', ephemeral: true });
        }

        let _0x9b0c;
        try {
            _0x9b0c = await _0x7a8b.channel.send({ content: '@everyone' });
            setTimeout(() => _0x9b0c.delete().catch(console.error), 5000); 
        } catch (_0xc1d2) {
            console.error('Mesaj gönderme hatası:', _0xc1d2);
            return _0x7a8b.reply({ content: 'Bakım mesajı gönderilirken bir hata oluştu!', ephemeral: true });
        }

        const _0xd3e4 = new _0x1a2b()
            .setTitle('X RP Kapalı')
            .setColor('#000000')
            .setDescription(`
                ***Değerli Oyuncularımız,***

                Sunucumuz şu anda kapalıdır. Bu süre zarfında sizlere daha iyi hizmet sunabilmek için çalışmaya devam ediyoruz. Sabrınız ve anlayışınız için teşekkür ederiz.

                Güncellemeler hakkında bilgi almak için lütfen [Discord kanalımızı](https://discord.com/channels/1263422869556170774/1264531172378284042) takip edin.

                **Sunucu Durumu:** <a:offline:1174710030520565960>
            `)
            .setTimestamp()
            .setImage('https://cdn.discordapp.com/attachments/942762889100550194/1264715922338353162/Ekran_Alnts.JPG')
            .setFooter({ text: 'X RP❤️.yusf', iconURL: 'https://cdn.discordapp.com/attachments/1159881722322763889/1264716470743470090/unknown.png' });

        return _0x7a8b.reply({ embeds: [_0xd3e4], ephemeral: false }); 
    },
};
