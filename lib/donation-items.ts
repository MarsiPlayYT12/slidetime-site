export type DonationItem = { id: string; name: string; description: string; perks: string[]; funpayUrl?: string };

// Добавьте ссылку в funpayUrl нужного товара, когда он появится на FunPay.
export const donationItems: DonationItem[] = [
  { id: "vip", name: "VIP", description: "Первый шаг к своему стилю на сервере.", perks: ["Косметический префикс", "Набор возможностей", "Поддержка проекта"] },
  { id: "premium", name: "PREMIUM", description: "Больше возможностей для яркой игры.", perks: ["Уникальный префикс", "Дополнительные команды", "Набор возможностей"] },
  { id: "deluxe", name: "DELUXE", description: "Для тех, кто хочет выделяться.", perks: ["Особый префикс", "Расширенный набор", "Поддержка проекта"] },
  { id: "legend", name: "LEGEND", description: "Сильный статус для настоящих легенд.", perks: ["Легендарный префикс", "Премиум-возможности", "Особый набор"] },
  { id: "titan", name: "TITAN", description: "Максимум стиля и поддержки сервера.", perks: ["Титановый префикс", "Максимальный набор", "Статус на сервере"] },
  { id: "currency", name: "ВАЛЮТА", description: "Игровой баланс для будущих покупок.", perks: ["Игровая валюта", "Быстрое начисление", "Поддержка проекта"] },
];
