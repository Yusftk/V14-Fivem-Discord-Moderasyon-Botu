# V14-Fivem-Discord-Moderasyon-Botu

Bu repository, **Fivem sunucuları için özel olarak geliştirilmiş bir Discord moderasyon botunu** içerir. Bot, sunucu yöneticilerinin ve moderatörlerin işlerini kolaylaştıracak kapsamlı komut seti ve olay yönetimi ile donatılmıştır.  

Bot, Discord.js v14 ile uyumludur ve modern slash komutları ile kullanıcı dostu bir deneyim sunar.  

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

## ⚙️ Kurulum ve Başlatma

Node.js’i yükleyin (v14 veya üzeri önerilir).  
Proje dizininde gerekli paketleri yükleyin:

```bash
# 1. Node.js ve gerekli paketleri yükleyin
 npm install

# 2. .env dosyası oluşturun ve Discord bot token, client ID ve sunucu ID ekleyin

# 3. Botu başlatın baslat.bat tıklayıp çalıştırın
baslat.bat
