# Nocturne

手機用的音樂播放器（PWA）。可搜尋並播放 **Audius**、**Internet Archive**（免費整首、無廣告、可背景播放，免金鑰），也能貼上 YouTube 影片或播放清單連結播放，支援鎖定畫面／耳機媒體控制、喜愛歌曲與最近播放。

- 線上使用：開啟 GitHub Pages 網址，在手機瀏覽器選「加到主畫面」
- 本機執行：`node server.js`，開啟 http://localhost:5173
- YouTube 關鍵字搜尋（選用）：在「收藏庫」填入 YouTube Data API v3 金鑰（只存在本機）

Audius 與 Internet Archive 直接播放音檔，iPhone 鎖屏也能繼續。YouTube 的背景播放受條款與瀏覽器限制：Android 安裝成 App 後多數情況可續播；iPhone 鎖屏後需從控制中心繼續播放。
