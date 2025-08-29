const { EmbedBuilder: _0xabc, ActionRowBuilder: _0xdef, ButtonBuilder: _0x123, ApplicationCommandType: _0x456, ButtonStyle: _0x789, PermissionsBitField: _0x012 } = require('discord.js');

module.exports = {
    data: {
        name: 'aktif',
        description: 'Sunucunun aktif duyurusu atar',
        type: _0x456.ChatInput,
    },
    async execute(_0x1a2b) {
        if (!_0x1a2b.member.permissions.has(_0x012.Flags.Administrator)) {
            return _0x1a2b.reply({ content: 'Bu komutu çalıştırmak için yeterli yetkin yok!', ephemeral: true });
        }

        let _0x3c4d;
        try {
            _0x3c4d = await _0x1a2b.channel.send({ content: '@everyone' });
            setTimeout(() => _0x3c4d.delete().catch(console.error), 5000);
        } catch (_0x5e6f) {
            console.error('Mesaj gönderme hatası:', _0x5e6f);
            return _0x1a2b.reply({ content: '@everyone mesajı gönderilirken bir hata oluştu!', ephemeral: true });
        }

        const _0x7g8h = new _0xabc()
            .setTitle('X Roleplay Aktif!')
            .setColor('#00FF00')
            .setDescription(`
                **Sunucumuz şu anda aktiftir!**

                🚀 ***Herhangi bir sorun ile karşılaştığınızda <#1264531222726709288> kanalı üzerinden ticket açabilirsiniz. X RP iyi eğlenceler diler.***

                **🔗 Sunucuya nasıl girerim?**
                🎮 Aşağıdaki butona tıklayarak ya da oyun içerisinden F8'e basıp açılan konsola **\`connect 185.137.98.61\`** yazarak sunucuya giriş sağlayabilirsiniz.

                **💡 Sunucu Durumu:** <a:online:1174709991979110401>
            `)
            .setImage('')
            .setTimestamp()
            .setFooter({ text: 'X RP❤️.yusf', iconURL: 'https://cdn.discordapp.com/attachments/1159881722322763889/1264716470743470090/unknown.png' });

        const _0x9i0j = new _0xdef()
            .addComponents(
                new _0x123()
                    .setLabel('🎮 Sunucuya Bağlan')
                    .setURL('https://cfx.re/join/')
                    .setStyle(_0x789.Link)
            );

        await _0x1a2b.reply({ embeds: [_0x7g8h], components: [_0x9i0j] });
    }
};
