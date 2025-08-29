const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

// Uyarı verilerini sakladığımız JSON dosyası
const warnsFile = path.join(__dirname, '../data/warns.json');

// Uyarıları temizleme fonksiyonu
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
        .setName('list-warns')
        .setDescription('Bir kullanıcının tüm uyarılarını listeler.')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Uyarıları listelenecek kullanıcı')
                .setRequired(true)),
    async execute(interaction) {
        if (!interaction.member.permissions.has('ADMINISTRATOR')) {
            return interaction.reply({ content: 'Bu komutu kullanmak için yeterli izinleriniz yok.', ephemeral: true });
        }

        const user = interaction.options.getUser('user');
        const userId = user.id;

        // Uyarı verilerini JSON dosyasından okuyun
        let warns = {};
        if (fs.existsSync(warnsFile)) {
            try {
                warns = JSON.parse(fs.readFileSync(warnsFile, 'utf8'));
            } catch (error) {
                console.error('Uyarı verileri okunurken bir hata oluştu:', error);
            }
        }

        // Eski uyarıları temizle (geçerlilik süresi dolmuş olanları)
        warns = cleanExpiredWarnings(warns);

        // Kullanıcının uyarılarını alın
        const userWarns = warns[userId] ? warns[userId].warns : [];

        if (userWarns.length === 0) {
            return interaction.reply({ content: `Bu kullanıcı için herhangi bir uyarı bulunmuyor.`, ephemeral: true });
        }

        // Embed oluşturun
        const embed = new EmbedBuilder()
            .setTitle(`${user.tag} - Uyarı Listesi`)
            .setColor('#FF0000')
            .setTimestamp();

        // Her bir uyarıyı embed'e ekleyin
        userWarns.forEach((warn, index) => {
            const warnDate = new Date(warn.date);
            const expiryDate = new Date(warn.expiryDate);
            const daysRemaining = Math.ceil((expiryDate - new Date()) / (1000 * 60 * 60 * 24)); // Kalan gün sayısı

            embed.addFields(
                { name: `Uyarı #${index + 1}`, value: `Sebep: \`${warn.reason}\`\nUyarı: \`${warn.numberOfWarnings}\`\nBitiş Tarihi: \`${expiryDate.toLocaleDateString()}\`\nTarih: \`${warnDate.toLocaleDateString()}\`\nKalan Gün: \`${daysRemaining}\``, inline: false }
            );
        });

        // Embed'i gönder
        await interaction.reply({ embeds: [embed] });
    },
};

// Bot başlatıldığında eski uyarıları temizleme
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

// Bot başlatıldığında eski uyarıları temizleyin
cleanWarningsOnStartup();
