const { EmbedBuilder: _0x1a2b, ApplicationCommandType: _0x3c4d, PermissionsBitField: _0x5e6f } = require('discord.js');

module.exports = {
    data: {
        name: 'bakım',
        description: 'Sunucu bakım mesajı atar',
        type: _0x3c4d.ChatInput,
    },
    async execute(_0x7g8h) {
        if (!_0x7g8h.member.permissions.has(_0x5e6f.Flags.Administrator)) {
            return _0x7g8h.reply({ content: 'Bu komutu çalıştırmak için yeterli yetkin yok!', ephemeral: true });
        }

        const _0x9i0j = new _0x1a2b()
            .setTitle('X RP Sunucu Bakımda!')
            .setColor('#FF0000') 
            .setDescription(`
                **Değerli Oyuncularımız,**

                Sunucumuz şu anda bakım aşamasındadır. Bu süreçte sizlere daha iyi bir hizmet sunabilmek için yoğun bir şekilde çalışıyoruz. 

                Bakım süreci tamamlandığında sizlere duyuru yapacağız. Bu süre zarfında sabrınız için teşekkür ederiz. Güncellemeler ve daha fazla bilgi için lütfen [Discord kanalımızı](https://discord.com/channels/1263422869556170774/1264531172378284042) takip edin.

                **Sunucu Durumu:** <a:restart:1174710010459201679>
            `)
            .setTimestamp()
            .setImage('')
            .setFooter({ text: 'X RP | Teşekkürler!', iconURL: 'https://cdn.discordapp.com/attachments/1159881722322763889/1264716470743470090/unknown.png' });

        try {
            const _0x0a1b = await _0x7g8h.channel.send({ content: '@everyone' });

            setTimeout(() => {
                _0x0a1b.delete().catch(console.error);
            }, 5000);

            await _0x7g8h.channel.send({ embeds: [_0x9i0j] });

        } catch (_0x2b3c) {
            console.error('Mesaj gönderme hatası:', _0x2b3c);
            return _0x7g8h.reply({ content: 'Bakım mesajı gönderilirken bir hata oluştu!', ephemeral: true });
        }
    }
};
