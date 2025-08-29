const { PermissionsBitField: _0x1a2b, ApplicationCommandOptionType: _0x3b2c } = require('discord.js');

module.exports = {
    data: {
        name: 'rolal',
        description: 'Bir kullanıcının rolünü alır.',
        options: [
            {
                name: 'üye',
                description: 'Rolü alınacak kullanıcı.',
                type: _0x3b2c.User,
                required: true,
            },
            {
                name: 'rol',
                description: 'Alınacak rol.',
                type: _0x3b2c.Role,
                required: true,
            },
        ],
    },
    async execute(_0x4d5e) {
        // Kullanıcının rol alma yetkisine sahip olup olmadığını kontrol et
        if (!_0x4d5e.member.permissions.has(_0x1a2b.Flags.ManageRoles)) {
            return _0x4d5e.reply({
                content: 'Bu komutu kullanabilmek için `Rolleri Yönet` yetkisine sahip olmalısın.',
                ephemeral: true,
            });
        }

        const _0x5f6a = _0x4d5e.options.getUser('üye');
        const _0x7e8b = _0x4d5e.options.getRole('rol');

        // Kullanıcının rol alması için botun rolünün yeterli olduğundan emin olun
        if (_0x4d5e.guild.members.me.roles.highest.position <= _0x7e8b.position) {
            return _0x4d5e.reply({
                content: 'Rol, botun rolünden yüksek veya eşit olduğu için rolü alamıyorum.',
                ephemeral: true,
            });
        }

        // Kullanıcıyı sunucuda bul
        const _0x9f0c = _0x4d5e.guild.members.cache.get(_0x5f6a.id);

        // Rolü al
        try {
            await _0x9f0c.roles.remove(_0x7e8b);
            return _0x4d5e.reply({
                content: `Başarıyla ${_0x5f6a.tag} kullanıcısından ${_0x7e8b.name} rolü alındı.`,
                ephemeral: true,
            });
        } catch (error) {
            console.error(error);
            return _0x4d5e.reply({
                content: 'Rol alınırken bir hata oluştu.',
                ephemeral: true,
            });
        }
    },
};
