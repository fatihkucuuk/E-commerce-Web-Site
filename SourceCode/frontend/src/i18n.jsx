import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    lng: 'tr',
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Yüklenen dosyanın yolu
    },
    fallbackLng: "en", // Varsayılan dil yüklenemezse kullanılacak yedek dil
    interpolation: {
      escapeValue: false
    }
  });

export function clickHandle(lang) {
  i18n.changeLanguage(lang);
}

export default i18n;