const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
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
        .setName('warn')
        .setDescription('Bir kullanıcıyı uyarır.')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Uyarılacak kullanıcı')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Uyarı sebebi')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('number_of_warnings')
                .setDescription('Alınan uyarı sayısı')
                .setRequired(true)
                .setMinValue(1))
        .addIntegerOption(option =>
            option.setName('duration')
                .setDescription('Uyarının geçerlilik süresi (gün olarak)')
                .setRequired(true)
                .setMinValue(1)
                .setMaxValue(30)),
    async execute(interaction) {
        if (!interaction.member.permissions.has('ADMINISTRATOR')) {
            return interaction.reply({ content: 'Bu komutu kullanmak için yeterli izinleriniz yok.', ephemeral: true });
        }

        const user = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason');
        const numberOfWarnings = interaction.options.getInteger('number_of_warnings');
        const durationDays = interaction.options.getInteger('duration');
        const date = new Date(); 
        const dateStr = date.toLocaleDateString('tr-TR'); 
        const timeStr = date.toLocaleTimeString('tr-TR'); 
        const expiryDate = new Date(Date.now() + durationDays * 24 * 60 * 60 * 1000).toISOString(); 
        const admin = interaction.user.tag; 

        let warns = {};
        if (fs.existsSync(warnsFile)) {
            try {
                warns = JSON.parse(fs.readFileSync(warnsFile, 'utf8'));
            } catch (error) {
                console.error('Uyarı verileri okunurken bir hata oluştu:', error);
            }
        }

        warns = cleanExpiredWarnings(warns);

        const userId = user.id;
        if (!warns[userId]) {
            warns[userId] = { warns: [] };
        }

        warns[userId].warns.push({ reason, numberOfWarnings, date: date.toISOString(), expiryDate });

        try {
            fs.writeFileSync(warnsFile, JSON.stringify(warns, null, 2), 'utf8');
        } catch (error) {
            console.error('Uyarı verileri yazılırken bir hata oluştu:', error);
        }

        const allWarnings = warns[userId].warns;
        const totalWarningsCount = allWarnings.reduce((acc, warn) => acc + warn.numberOfWarnings, 0);

        const embed = new EmbedBuilder()
            .setTitle('Kullanıcı Uyarıldı')
            .setColor('#FF0000')
            .setTimestamp()
            .setThumbnail(user.displayAvatarURL({ dynamic: true })) // Kullanıcı avatarı
            .addFields(
                { name: 'Kullanıcı', value: `\`\`\`${user.tag}\`\`\``, inline: true },
                { name: 'Sebep', value: `\`\`\`${reason}\`\`\``, inline: true },
                { name: 'Alınan Uyarı', value: `\`\`\`${numberOfWarnings.toString()}\`\`\``, inline: true },
                { name: 'Geçerlilik Süresi', value: `\`\`\`${durationDays} gün\`\`\``, inline: true },
                { name: 'Yetkili', value: `\`\`\`${admin}\`\`\``, inline: true },
                { name: 'Toplam Uyarı Sayısı', value: `\`\`\`${totalWarningsCount.toString()}\`\`\``, inline: true },
                { name: 'Tarih ve Saat', value: `\`\`\`${dateStr} ${timeStr}\`\`\``, inline: false },
                { name: 'Açıklama', value: `${reason} adlı sebepten dolayı kullanıcı uyarıldı ${user} `, inline: false }
            );

        await interaction.reply({ embeds: [embed] });
    },
};

function cleanWarningsOnStartup() {
    if (fs.existsSync(warnsFile)) {
        let warns = {};
        try {
            warns = JSON.parse(fs.readFileSync(warnsFile, 'utf8'));
        } catch (error) {
            console.error('Uyarı verileri okunurken bir hata oluştu:', error);
        }

        warns = cleanExpiredWarnings(warns);

        try {
            fs.writeFileSync(warnsFile, JSON.stringify(warns, null, 2), 'utf8');
        } catch (error) {
            console.error('Uyarı verileri yazılırken bir hata oluştu:', error);
        }
    }
}

cleanWarningsOnStartup();
