const { PermissionsBitField: _0x1a2b } = require('discord.js');

module.exports = {
    data: {
        name: 'nick',
        description: 'Seçtiğiniz kullanıcının takma adını değiştirirsiniz.',
        type: 1,
        options: [
            {
                name: 'üye',
                description: 'Takma adı değiştirelecek üyeyi seçin.',
                type: 6,
                required: true,
            },
            {
                name: 'isim',
                description: 'Yeni takma adını girin.',
                type: 3,
                required: true,
            },
        ],
    },
    async execute(_0x7a8b) {
        if (!_0x7a8b.member.permissions.has(_0x1a2b.Flags.ManageNicknames)) {
            return _0x7a8b.reply({
                content: 'Bu komutu kullanabilmek için `Takma Adları Yönet` yetkisine sahip olmalısın.',
                ephemeral: true,
            });
        }

        const _0x9b0c = _0x7a8b.options.getString('isim');
        const _0xc1d2 = _0x7a8b.options.getMember('üye');

        if (!_0xc1d2) {
            return _0x7a8b.reply({
                content: 'Belirtilen kullanıcı bulunamadı.',
                ephemeral: true,
            });
        }

        if (_0x7a8b.member.roles.highest.position <= _0xc1d2.roles.highest.position) {
            return _0x7a8b.reply({
                content: 'Bu kullanıcı üzerinde işlem yapma yetkiniz yok.',
                ephemeral: true,
            });
        }

        try {
            await _0xc1d2.setNickname(_0x9b0c);
            return _0x7a8b.reply({
                content: `Başarıyla ${_0xc1d2} kullanıcısının ismi ${_0x9b0c} olarak değiştirildi.`,
                ephemeral: true,
            });
        } catch (error) {
            console.error(error);
            return _0x7a8b.reply({
                content: 'Bu kullanıcının ismini değiştiremiyorum.',
                ephemeral: true,
            });
        }
    },
};
