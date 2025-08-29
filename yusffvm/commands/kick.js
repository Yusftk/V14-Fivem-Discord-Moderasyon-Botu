const { PermissionsBitField: _0x1a2b, ApplicationCommandType: _0x3c4d, ApplicationCommandOptionType: _0x5e6f } = require('discord.js');

module.exports = {
    data: {
        name: 'kick',
        description: 'Seçtiğiniz üyeyi sunucudan atarsınız.',
        type: _0x3c4d.ChatInput,
        options: [
            {
                name: 'üye',
                description: 'Sunucudan atılacak üyeyi seçin.',
                type: _0x5e6f.User,
                required: true,
            },
            {
                name: 'sebep',
                description: 'Atılma sebebi.',
                type: _0x5e6f.String,
                min_length: 1,
                max_length: 100,
                required: false,
            },
        ],
    },
    async execute(_0x7a8b) {
        // 1. İlgili yetki mesajı güncellendi.
        if (!_0x7a8b.member.permissions.has(_0x1a2b.Flags.KickMembers)) {
            return _0x7a8b.reply({
                content: 'Bu komutu kullanmak için `Üyeleri At` yetkisine sahip olmalısın.',
                ephemeral: true,
            });
        }

        // 2. Üye ve sebep parametreleri alındı.
        const _0x9b0c = _0x7a8b.options.getMember('üye');
        const _0xc1d2 = _0x7a8b.options.getString('sebep');

        // 3. Üyenin atılabilir durum kontrolü.
        if (_0x9b0c.kickable) {
            // 4. Kullanıcıyı atma işlemi gerçekleştirildi.
            _0x9b0c.kick({ reason: _0xc1d2 ?? 'Sebep belirtilmedi.' }).catch(() => {
                return _0x7a8b.reply({
                    content: 'Bu kullanıcıyı atamaya yetkim yok.',
                    ephemeral: true,
                });
            });
            // 5. Başarılı atılma durumu mesajı.
            _0x7a8b.reply({ content: `${_0x9b0c} adlı üye sunucudan atıldı.`, ephemeral: true });
        } else {
            // 6. Üyenin atılamayacak durumu için mesaj.
            _0x7a8b.reply({
                content: 'Bu kullanıcıyı atamaya yetkim yok.',
                ephemeral: true,
            });
        }
    },
};
