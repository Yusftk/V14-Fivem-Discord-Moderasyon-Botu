const { PermissionsBitField: _0x5f3a } = require('discord.js');

module.exports = {
    data: {
        name: 'unban',
        description: 'Kullanıcının Yasağını Kaldırırsın!',
        type: 1,
        options: [
            {
                name: 'id',
                description: 'Kullanıcı ID Girin!',
                type: 3,
                required: true,
            },
        ],
    },
    async execute(_0x7e8d) {
        if (!_0x7e8d.member.permissions.has(_0x5f3a.Flags.BanMembers)) {
            return _0x7e8d.reply({ content: 'Üyeleri Yasakla Yetkin Yok!', ephemeral: true });
        }

        const _0x2e4f = _0x7e8d.options.getString('id');

        try {
            await _0x7e8d.guild.members.unban(_0x2e4f);
            return _0x7e8d.reply({ content: 'Başarıyla üyenin yasağını kaldırdım.', ephemeral: true });
        } catch (_0x5d6a) {
            console.error(_0x5d6a);
            return _0x7e8d.reply({ content: 'Üzgünüm, bir hata oluştu.', ephemeral: true });
        }
    },
};
