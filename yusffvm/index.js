/**
 * @file
 * @name yusffvm
 * @version 1.0.0
 * @description yusuf fvm botu.
 * @license MIT License
 * @copyright (c) 2025 .yusf
 */


require('dotenv').config(); 

const fs = require('fs');
const path = require('path');
const { Client, GatewayIntentBits, REST, Routes, Collection } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
client.commands = new Collection();

const token = process.env.TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    if (command.data && command.data.name) {
        client.commands.set(command.data.name, command);
        console.log(`[COMMAND] ${command.data.name} komutu yüklendi.`);
    } else {
        console.error(`Komut dosyası "${file}" geçerli bir yapıya sahip değil.`);
    }
}

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    try {
        console.log('Slash komutları kayıt ediliyor...');
        const commands = commandFiles.map(file => {
            const command = require(`./commands/${file}`);
            return command.data; 
        });
        await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });
        console.log('Slash komutları başarıyla kayıt edildi.');
    } catch (error) {
        console.error('Komut kayıt hatası:', error);
    }
})();

const eventFilesPath = path.join(__dirname, 'events');

if (fs.existsSync(eventFilesPath)) {
    const eventFiles = fs.readdirSync(eventFilesPath).filter(file => file.endsWith('.js'));

    for (const file of eventFiles) {
        const event = require(`./events/${file}`);
        const eventName = file.split(".")[0];
        client.on(eventName, (...args) => event(client, ...args));
        console.log(`[EVENT] ${eventName} eventi yüklendi.`);
    }
} else {
    console.error('Events dizini bulunamadı.');
}

client.on("messageCreate", msg => {
    if (msg.content.toLowerCase() === "!kayıt") {
        if (msg.channel.id === '1175147870270259251') {
            msg.channel.send(`***Yetkili ekibimiz en kısa sürede sizinle ilgilenecektir!***||<@&1117263890334617661> <@&1117263890334617663>||`);
        }
    }
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;
    const command = client.commands.get(commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error('Komut işleme hatası:', error);
        await interaction.reply({ content: 'Bir hata oluştu!', ephemeral: true });
    }
});

client.once('ready', () => {
    console.log(`Giriş yapıldı: ${client.user.tag}`);
});

client.login(token).catch(error => {
    console.error('Bot giriş hatası:', error);
});
