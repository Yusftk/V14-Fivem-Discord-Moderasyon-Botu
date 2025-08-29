const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: 'avatar',
        description: 'Kullanıcının avatarını gösterir',
        type: ApplicationCommandType.ChatInput,
        options: [
            {
                name: 'kullanici',
                description: 'Göstermek istediğiniz kullanıcının avatarı.',
                type: ApplicationCommandOptionType.User,
                required: false 
            }
        ],
    },
    execute: async (interaction) => {
        const kullanici = interaction.options.getUser('kullanici') || interaction.user;

        const embed = new EmbedBuilder()
            .setTitle(`${kullanici.tag}'in avatarı`)
            .setImage(kullanici.displayAvatarURL({ size: 4096 }))
            .setColor('Fuchsia')
            .setTimestamp();

        const formatlar = ['png', 'jpg', 'jpeg', 'gif'];
        const bileşenler = [];

        formatlar.forEach(format => {
            const resimSecenekleri = {
                format: format,
                dynamic: format === 'gif' 
            };

            if (kullanici.avatar && (format !== 'gif' || kullanici.avatar.startsWith('a_'))) {
                bileşenler.push(
                    new ButtonBuilder()
                        .setLabel(format.toUpperCase())
                        .setStyle(ButtonStyle.Link)
                        .setURL(kullanici.displayAvatarURL(resimSecenekleri))
                );
            }
        });

        const satir = new ActionRowBuilder()
            .addComponents(bileşenler);

        return interaction.reply({ embeds: [embed], components: [satir] });
    }
};
