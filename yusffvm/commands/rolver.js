const { PermissionsBitField: _0x1a2b, ApplicationCommandOptionType: _0x3c4d } = require('discord.js');

module.exports = {
    data: {
        name: 'rolver',
        description: 'Bir kullanıcıya rol verir.',
        options: [
            {
                name: 'üye',
                description: 'Rol verilecek kullanıcı.',
                type: _0x3c4d.User,
                required: true,
            },
            {
                name: 'rol',
                description: 'Verilecek rol.',
                type: _0x3c4d.Role,
                required: true,
            },
        ],
    },
    async execute(_0x5a6b) {
        // Kullanıcının rol verme yetkisine sahip olup olmadığını kontrol et
        if (!_0x5a6b.member.permissions.has(_0x1a2b.Flags.ManageRoles)) {
            return _0x5a6b.reply({
                content: 'Bu komutu kullanabilmek için `Rolleri Yönet` yetkisine sahip olmalısın.',
                ephemeral: true,
            });
        }

        const _0x6b7c = _0x5a6b.options.getUser('üye');
        const _0x8c9d = _0x5a6b.options.getRole('rol');

        // Kullanıcının rol vermesi için botun rolünün yeterli olduğundan emin olun
        if (_0x5a6b.guild.members.me.roles.highest.position <= _0x8c9d.position) {
            return _0x5a6b.reply({
                content: 'Rol, botun rolünden yüksek veya eşit olduğu için rolü veremiyorum.',
                ephemeral: true,
            });
        }

        // Kullanıcıyı sunucuda bul
        const _0x9e0f = _0x5a6b.guild.members.cache.get(_0x6b7c.id);

        // Rolü ver
        try {
            await _0x9e0f.roles.add(_0x8c9d);
            return _0x5a6b.reply({
                content: `Başarıyla ${_0x6b7c.tag} kullanıcısına ${_0x8c9d.name} rolü verildi.`,
                ephemeral: true,
            });
        } catch (error) {
            console.error(error);
            return _0x5a6b.reply({
                content: 'Rol verilirken bir hata oluştu.',
                ephemeral: true,
            });
        }
    },
};
