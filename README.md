# SlideTime

Одностраничный сайт Minecraft-сервера SlideTime на React, TypeScript, Tailwind CSS и Vinext / Cloudflare Workers.

## Запуск

Требуется Node.js 22+.

```bash
npm install
npm run dev
```

Откройте URL, который покажет Vite (обычно `http://127.0.0.1:5173`). Для production-сборки: `npm run build`.

## Статус сервера

Маршрут `GET /api/status` запрашивает реальный Java-статус `slidetime.space` через HTTPS API mcstatus.io. Интерфейс обновляет его каждые 30 секунд. Если проверка невозможна, посетитель увидит «Статус временно недоступен».

## FunPay

Конфигурация товаров находится в `lib/donation-items.ts`. После создания лотов добавьте URL товара в поле `funpayUrl` нужной привилегии и замените временное окно в `app/page.tsx` на переход по этой ссылке.
