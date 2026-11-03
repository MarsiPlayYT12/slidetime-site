export type DonationItem = { id: string; name: string; description: string; perks: string[]; price: string; funpayUrl: string };

// Добавьте ссылку в funpayUrl нужного товара, когда он появится на FunPay.
export const donationItems: DonationItem[] = [
  { id: "starlight", name: "ꜱᴛᴀʀʟɪɢʜᴛ", description: "Привилегия для яркого старта.", price: "79 ₽ + комиссия", perks: ["Статус на сервере", "Уникальный префикс", "Поддержка проекта"], funpayUrl: "https://funpay.com/uk/lots/offerEdit?node=1753&offer=81221960" },
  { id: "lunar", name: "ʟᴜɴᴀʀ", description: "Лунный уровень возможностей.", price: "149 ₽ + комиссия", perks: ["Статус на сервере", "Особый префикс", "Набор возможностей"], funpayUrl: "https://funpay.com/uk/lots/offerEdit?node=1753&offer=81222182" },
  { id: "eclipse", name: "ᴇᴄʟɪᴘꜱᴇ", description: "Для тех, кто хочет выделяться.", price: "229 ₽ + комиссия", perks: ["Статус на сервере", "Расширенный набор", "Поддержка проекта"], funpayUrl: "https://funpay.com/uk/lots/offerEdit?node=1753&offer=81222287" },
  { id: "astral", name: "ᴀꜱᴛʀᴀʟ", description: "Космический статус для игры без границ.", price: "329 ₽ + комиссия", perks: ["Особый префикс", "Премиум-возможности", "Поддержка проекта"], funpayUrl: "https://funpay.com/uk/lots/offerEdit?node=1753&offer=81222663" },
  { id: "nebula", name: "ɴᴇʙᴜʟᴀ", description: "Сильный статус для настоящих игроков.", price: "449 ₽ + комиссия", perks: ["Статус на сервере", "Расширенные возможности", "Особый набор"], funpayUrl: "https://funpay.com/uk/lots/offerEdit?node=1753&offer=81223139" },
  { id: "celestial", name: "ᴄᴇʟᴇꜱᴛɪᴀʟ", description: "Небесный уровень для избранных.", price: "599 ₽ + комиссия", perks: ["Легендарный префикс", "Премиум-возможности", "Особый набор"], funpayUrl: "https://funpay.com/uk/lots/offerEdit?node=1753&offer=81223297" },
  { id: "moonlord", name: "ᴍᴏᴏɴʟᴏʀᴅ", description: "Для властелинов ночи.", price: "999 ₽ + комиссия", perks: ["Элитный статус", "Максимальный набор", "Поддержка проекта"], funpayUrl: "https://funpay.com/uk/lots/offerEdit?node=1753&offer=81223451" },
  { id: "slide", name: "ꜱʟɪᴅᴇ", description: "Главная привилегия SlideTime.", price: "1499 ₽ + комиссия", perks: ["Главный статус", "Максимум возможностей", "Особый набор"], funpayUrl: "https://funpay.com/uk/lots/offerEdit?node=1753&offer=81223625" },
  { id: "coins-case", name: "Кейс с Монетами", description: "Испытай удачу и пополни запас монет.", price: "49 ₽ + комиссия", perks: ["Игровые монеты", "Случайная награда", "Быстрое начисление"], funpayUrl: "https://funpay.com/uk/lots/offerEdit?node=1753&offer=81223883" },
  { id: "slides-case", name: "Кейс с Слайдами", description: "Кейс с внутриигровыми слайдами.", price: "119 ₽ + комиссия", perks: ["Игровые слайды", "Случайная награда", "Быстрое начисление"], funpayUrl: "https://funpay.com/uk/lots/offerEdit?node=1753&offer=81223985" },
  { id: "donate-case", name: "Кейс с Донатом", description: "Шанс получить донат-привилегию.", price: "249 ₽ + комиссия", perks: ["Случайный донат", "Особая награда", "Поддержка проекта"], funpayUrl: "https://funpay.com/uk/lots/offerEdit?node=1753&offer=81224068" },
];
