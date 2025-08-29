const { EmbedBuilder: _0x1a2b, ActionRowBuilder: _0x3c4d, ButtonBuilder: _0x5e6f, ButtonStyle: _0x7g8h, ApplicationCommandType: _0x9i0j } = require('discord.js');

module.exports = {
  data: {
    name: 'ip',
    description: 'Sunucunun IP adresini öğrenirsin!',
    type: _0x9i0j.ChatInput,
  },
  async execute(_0x0a1b) {
    const _0x2b3c = new _0x1a2b()
      .setTitle('X RP İp Bilgisi')
      .setDescription("**X RP İp Bilgisi**\n\n**» Sunucu IP :** 185.137.98.61 \n\n**» Sunucuya nasıl girerim?**\nGiriş sağlamak için oyun içerisinden F8'e basıp açılan konsola **`connect 185.137.98.61`** yazmanız yeterlidir ya da aşağıdaki butona tıklayarak doğrudan sunucuya bağlanabilirsiniz")
      .setColor('#000000');

    const _0x4d5e = new _0x3c4d()
      .addComponents(
        new _0x5e6f()
          .setLabel('🎮 Sunucuya Bağlan')
          .setURL('https://cfx.re/join/')
          .setStyle(_0x7g8h.Link)
      );

    await _0x0a1b.reply({ embeds: [_0x2b3c], components: [_0x4d5e], ephemeral: true });
  }
};
