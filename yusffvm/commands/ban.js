const { PermissionsBitField: _0xabc } = require('discord.js');

module.exports = {
  data: {
    name: 'ban',
    description: 'Seçtiğiniz üyeyi sunucudan yasaklarsınız.',
    options: [
      {
        name: 'üye',
        description: 'Sunucudan yasaklanacak üyeyi seçin.',
        type: 6, // USER
        required: true,
      },
      {
        name: 'sebep',
        description: 'Yasaklanma sebebi.',
        type: 3, // STRING
        min_length: 1,
        max_length: 100,
        required: false,
      },
    ],
  },
  execute: async (_0x123) => {
    if (!_0x123.member.permissions.has(_0xabc.Flags.BanMembers))
      return _0x123.reply({
        content: 'Bu komutu kullanmak için `Üyeleri Yasakla` yetkisine sahip olmalısın.',
        ephemeral: true,
      });

    const _0x456 = _0x123.options.getMember('üye');
    const _0x789 = _0x123.options.getString('sebep');

    if (!_0x456) {
      return _0x123.reply({
        content: 'Belirtilen üye bulunamadı veya sunucuda yok.',
        ephemeral: true,
      });
    }

    if (_0x456.bannable) {
      _0x456.ban({ reason: _0x789 ?? 'Sebep belirtilmedi.' }).catch(() => {
        return _0x123.reply({
          content: 'Bu kullanıcıyı banlamaya yetkim yok.',
          ephemeral: true,
        });
      });
      _0x123.reply({ content: `${_0x456} adlı üye sunucudan yasaklandı.`, ephemeral: true });
    } else {
      _0x123.reply({
        content: 'Bu kullanıcıyı banlamaya yetkim yok.',
        ephemeral: true,
      });
    }
  },
};
