const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');
const fs = require('fs');  
const path = require('path');
const warnsFile = path.join(__dirname, '../data/warns.json');  

function cleanExpiredWarnings(warns) {
    const now = new Date();
    for (const userId in warns) {
        if (warns.hasOwnProperty(userId)) {
            warns[userId].warns = warns[userId].warns.filter(warn => new Date(warn.expiryDate) > now);
        }
    }
    return warns;
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear-warn')
        .setDescription('Belirli bir uyarıyı veya tüm uyarıları temizler.')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Uyarıları silinecek kullanıcı')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('warn_number')
                .setDescription('Silinecek uyarının numarası (Bunu belirtirseniz yalnızca bu uyarı silinir)')
                .setRequired(false)
                .setMinValue(1))
        .addBooleanOption(option =>
            option.setName('clear_all')
                .setDescription('Tüm uyarıları temizler (eğer true ise `warn_number` dikkate alınmaz)')
                .setRequired(false)),
    async execute(interaction) {
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
            return interaction.reply({ content: 'Bu komutu kullanmak için yeterli izinleriniz yok.', ephemeral: true });
        }

        const user = interaction.options.getUser('user');
        const warnNumber = interaction.options.getInteger('warn_number');
        const clearAll = interaction.options.getBoolean('clear_all');
        const userId = user.id;

        let warns = {};
        if (fs.existsSync(warnsFile)) {
            try {
                warns = JSON.parse(fs.readFileSync(warnsFile, 'utf8'));
            } catch (error) {
                console.error('Uyarı verileri okunurken bir hata oluştu:', error);
            }
        }

        warns = cleanExpiredWarnings(warns);

        const userWarns = warns[userId] ? warns[userId].warns : [];

        if (clearAll) {
            delete warns[userId];
        } else {
            if (warnNumber <= 0 || warnNumber > userWarns.length) {
                return interaction.reply({ content: `Geçersiz uyarı numarası. Kullanıcının mevcut ${userWarns.length} uyarısı var.`, ephemeral: true });
            }

            userWarns.splice(warnNumber - 1, 1); 

            if (userWarns.length === 0) {
                delete warns[userId];
            } else {
                warns[userId].warns = userWarns;
            }
        }

        try {
            fs.writeFileSync(warnsFile, JSON.stringify(warns, null, 2), 'utf8');
        } catch (error) {
            console.error('Uyarı verileri yazılırken bir hata oluştu:', error);
        }

        const embed = new EmbedBuilder()
            .setTitle(clearAll ? 'Tüm Uyarılar Silindi' : 'Uyarı Silindi')
            .setColor('#00FF00')
            .setTimestamp()
            .addFields(
                { name: 'Kullanıcı', value: user.tag, inline: true },
                { name: clearAll ? 'Silinen Uyarılar' : 'Silinen Uyarı Numarası', value: clearAll ? 'Tüm uyarılar silindi.' : warnNumber.toString(), inline: true }
            );

        await interaction.reply({ embeds: [embed] });
    },
};
