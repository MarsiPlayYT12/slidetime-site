# SlideTime

Одностраничный сайт Minecraft-сервера SlideTime на Next.js, React, TypeScript и Tailwind CSS. Он подготовлен для полностью статического GitHub Pages.

## Локальный запуск

Требуется Node.js 22+.

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000`. Команда `npm run build` создаёт готовый статический сайт в `out/`.

## Онлайн Minecraft

Онлайн `slidetime.space` запрашивается напрямую у публичного HTTPS API mcstatus.io. Данные обновляются каждые 30 секунд. При сетевой ошибке сайт выводит нейтральное сообщение, не подставляя выдуманный онлайн.

GitHub Pages не запускает Node.js, Cloudflare Workers, API Routes или базы данных. Поэтому прежний серверный маршрут перенесён в `worker/status-api.ts` как заготовка для будущего Cloudflare Worker, а статический сайт использует CORS-доступный внешний API. Папки `db` и `drizzle` сейчас не содержат прикладных таблиц и не используются интерфейсом. Если позже потребуются пользовательские данные или платежи, используйте Cloudflare Workers + D1 либо Supabase/Firebase; секреты храните только в настройках такого сервиса.

## GitHub Pages

Workflow `.github/workflows/deploy-pages.yml` собирает и публикует `out/` после каждого push в ветку `main`. В репозитории откройте **Settings → Pages** и выберите источник **GitHub Actions**.

`public/CNAME` уже содержит `www.slidetime.space`. В DNS добавьте CNAME-запись `www` со значением `MarsiPlayYT12.github.io`, после чего укажите `www.slidetime.space` в **Settings → Pages → Custom domain**. Для корневого `slidetime.space` настройте редирект на `www` у DNS-провайдера.

После подключения `www.slidetime.space` workflow по умолчанию собирает сайт с корневыми путями `/` для CSS, JavaScript и public-ресурсов. Никакая переменная GitHub Actions для этого не нужна. Если когда-нибудь потребуется снова опубликовать временную project-версию по адресу `https://marsiplayyt12.github.io/slidetime-site/`, запустите workflow вручную и выберите `github-pages` в поле **Hosting path for this build**. Для локальной проверки project-версии используйте `NEXT_PUBLIC_BASE_PATH=/slidetime-site npm run build`.

## FunPay

Конфигурация товаров и ссылки FunPay находятся в `lib/donation-items.ts`.
