const { EmbedBuilder: _0x7f3a, ApplicationCommandType: _0x5f2a, PermissionsBitField: _0x1d4a } = require('discord.js');

module.exports = {
    data: {
        name: 'restart',
        description: "Sunucu restart duyurusu",
        type: _0x5f2a.ChatInput,
    },
    async execute(_0x2d8f) {
        if (!_0x2d8f.member.permissions.has(_0x1d4a.Flags.Administrator)) {
            return _0x2d8f.reply({ content: "Restart duyurusu yapacak yetkin yok!", ephemeral: true });
        }

        const _0x34a4 = new _0x7f3a()
            .setTitle('X RP Sunucu Restart')
            .setColor('#FFA500')  
            .setDescription(`
                **Sunucuya Restart Atılıyor**

                ***Sunucumuza şu anda restart atılıyor. En kısa sürede aktif olacaktır. Bu süre zarfında herhangi bir sorun ile karşılaştığınızda <#1264531222726709288> kanalı üzerinden ticket açabilirsiniz. X RP iyi günler diler.***

                **» Sunucu Durumu:** <a:restart:1174710010459201679>
            `)
            .setThumbnail('')
            .setImage('')
            .setTimestamp()
            .setFooter({ text: 'X RP❤️.yusf', iconURL: 'https://cdn.discordapp.com/attachments/1159881722322763889/1264716470743470090/unknown.png?ex=669ee27f&is=669d90ff&hm=f83b3329c8703a2a06b7868d1f72947fe5eaef7b2e391783c824aed5141f73d2&' });

        await _0x2d8f.channel.send({ content: '@everyone' }).then(_0x1c7a => { 
            setTimeout(() => { _0x1c7a.delete() }, 5000); 
        });

        await _0x2d8f.reply({ embeds: [_0x34a4] });
    },
};
