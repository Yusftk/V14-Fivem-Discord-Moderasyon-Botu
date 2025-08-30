# V14-Fivem-Discord-Moderasyon-Botu

Bu bot fivem sunucuları için özel olarak geliştirilmiş, güvenilir ve kapsamlı bir Discord moderasyon botudur.  
Bu bot, birçok büyük Fivem sunucusunun Discord topluluklarında test edilmiş ve aktif olarak kullanılmaktadır. Sunucu yöneticileri ve moderatörler için rol yönetimi, ban/kick işlemleri, uyarı sistemi, kullanıcı bilgisi sorgulama gibi temel moderasyon özelliklerinin yanı sıra, sunucu durum kontrolü, bakım modu ve bot restart komutu gibi ek işlevler de sunar.  

İsteğe bağlı olarak log sistemi entegre edilebilir; böylece tüm moderasyon işlemleri kaydedilir ve takip edilebilir. Bot, modern slash komutları ve esnek yapısı sayesinde hem deneyimli yöneticiler hem de yeni başlayanlar tarafından rahatlıkla kullanılabilir ve kolayca özelleştirilebilir.  

Bot ile ilgili sorularınız veya destek talepleriniz için Discord üzerinden doğrudan iletişime geçebilirsiniz: discord adresim (**.yusf**).  
Kısacası, bu bot sunucunuzu hem güvenli hem de düzenli bir şekilde yönetmenizi sağlar ve Fivem topluluğu tarafından güvenle tercih edilmektedir.  


---

## ⚡ Özellikler

1. Sunucu yönetimi için tam moderasyon desteği  
2. Slash komutları ile hızlı ve modern kullanım  
3. Uyarı (warn) sistemi ve uyarı yönetimi  
4. Rol yönetimi (verme/alma)  
5. Ban, Unban ve Kick işlemleri  
6. Kullanıcı bilgisi ve avatar sorgulama  
7. Sunucu durum kontrolü ve bakım modu  
8. IP sorgulama  
9. Sunucu restart komutu  
10. Event desteği (`ready` eventi ile otomatik başlatma)  

---

## 🛠️ Komut Listesi

| Komut | Açıklama |
|-------|----------|
| `/aktif` | Sunucudaki aktif kullanıcıları listeler |
| `/avatar` | Kullanıcının avatarını gösterir |
| `/bakım` | Sunucuyu bakım moduna alır veya kapatır |
| `/ban` | Belirtilen kullanıcıyı banlar |
| `/unban` | Banlı kullanıcıyı açar |
| `/kick` | Belirtilen kullanıcıyı sunucudan atar |
| `/nick` | Kullanıcının takma adını değiştirir |
| `/rolver` | Kullanıcıya rol verir |
| `/rolal` | Kullanıcıdan rol alır |
| `/warn` | Kullanıcıya uyarı ekler |
| `/clear-warn` | Kullanıcının tüm uyarılarını siler |
| `/list-warns` | Kullanıcının uyarılarını listeler |
| `/ip` | Kullanıcının IP bilgilerini sorgular |
| `/restart` | Botu yeniden başlatır |
| `/kapalı` | Komut veya sunucu durumunu kapatır |

> Tüm komutlar slash komutları olarak kullanılabilir ve kullanıcı dostu bir yapı sunar.

---

## 🔔 Eventler

- **`ready` eventi:** Bot başlatıldığında gerekli tüm ayarları yükler ve slash komutlarını kaydeder.

---

4️⃣ Discord botunuz için gerekli izinleri açın (Privileged Gateway Intents)

Botun moderasyon komutlarını doğru şekilde çalıştırabilmesi için bazı özel izinleri etkinleştirmeniz gerekir:

Discord Developer Portal
 sayfasına gidin ve botunuzu seçin.

Sol menüden Bot sekmesine tıklayın.

Privileged Gateway Intents bölümünde aşağıdaki seçenekleri aktif edin:

Presence Intent → Kullanıcıların durumlarını görebilmek için

Server Members Intent → Sunucu üyelerini takip edebilmek için

Message Content Intent → Mesaj içeriklerini okuyabilmek için

Bu ayarlar özellikle moderasyon komutları, uyarı sistemi ve kullanıcı sorgulamaları için gereklidir.

## ⚙️ Kurulum ve Başlatma

Node.js’i yükleyin (v14 veya üzeri önerilir).  
Proje dizininde gerekli paketleri yükleyin:

```bash
# 1. Node.js ve gerekli paketleri yükleyin
 npm install

# 2. .env dosyası oluşturun ve Discord bot token, client ID ve sunucu ID ekleyin

# 3. Botu başlatın baslat.bat tıklayıp çalıştırın
baslat.bat 
```
---

## ⭐ Projeyi Destekleyin

Bu botu faydalı bulduysanız, projenin gelişimine katkıda bulunmak için GitHub reposuna **star verebilirsiniz**.  
Her star, projenin sürdürülebilirliği ve topluluğa sağladığı faydayı artırmak için büyük bir motivasyon kaynağıdır.  

--- 

# V14-Fivem-Discord-Moderation-Bot

This bot is a reliable and comprehensive Discord moderation bot developed specifically for FiveM servers. It has been tested and is actively used in the Discord communities of many large FiveM servers. In addition to essential moderation features like role management, ban/kick actions, a warning system, and user info queries for server admins and moderators, it also offers extra functions like server status checks, maintenance mode, and a bot restart command.

An optional logging system can be integrated to record and track all moderation actions. Thanks to its modern slash commands and flexible structure, the bot can be easily used by both experienced admins and newcomers and can be customized with ease.

For any questions or support requests about the bot, you can contact me directly on Discord: my Discord handle is **.yusf**.

In short, this bot allows you to manage your server in a safe and organized way and is a trusted choice within the FiveM community.

-----

## ⚡ Features

1.  Full moderation support for server management
2.  Fast and modern usage with slash commands
3.  Warning system and warning management
4.  Role management (give/take)
5.  Ban, Unban, and Kick actions
6.  User info and avatar lookup
7.  Server status check and maintenance mode
8.  IP lookup
9.  Server restart command
10. Event support (automatic startup with the `ready` event)

-----

## 🛠️ Command List

| Command | Description |
| :--- | :--- |
| `/aktif` | Lists active users on the server |
| `/avatar` | Shows a user's avatar |
| `/bakım` | Puts the server in maintenance mode or closes it |
| `/ban` | Bans the specified user |
| `/unban` | Unbans a user |
| `/kick` | Kicks the specified user from the server |
| `/nick` | Changes a user's nickname |
| `/rolver` | Gives a role to a user |
| `/rolal` | Takes a role from a user |
| `/warn` | Adds a warning to a user |
| `/clear-warn` | Deletes all of a user's warnings |
| `/list-warns` | Lists a user's warnings |
| `/ip` | Queries a user's IP information |
| `/restart` | Restarts the bot |
| `/kapalı` | Disables a command or server status |

> All commands can be used as slash commands and offer a user-friendly experience.

-----

## 🔔 Events

  - **`ready` event:** When the bot starts, it loads all necessary settings and registers the slash commands.

-----

### 4️⃣ Enable Required Permissions for Your Discord Bot (Privileged Gateway Intents)

For the bot's moderation commands to work correctly, you need to enable some special permissions:

Go to the Discord Developer Portal page and select your bot.

In the left menu, click on the **Bot** tab.

Under the **Privileged Gateway Intents** section, activate the following options:

  * **Presence Intent** → To be able to see user statuses
  * **Server Members Intent** → To be able to track server members
  * **Message Content Intent** → To be able to read message content

These settings are especially necessary for moderation commands, the warning system, and user queries.

## ⚙️ Setup and Startup

Install Node.js (v14 or higher is recommended).
Install the required packages in the project directory:

```bash
# 1. Install Node.js and the necessary packages
npm install

# 2. Create a .env file and add your Discord bot token, client ID, and server ID

# 3. Start the bot by clicking and running baslat.bat
baslat.bat
```

-----

## ⭐ Support the Project

If you found this bot useful, you can **star** the GitHub repository to contribute to its development.
Every star is a great source of motivation to keep the project going and increase its benefit to the community.
