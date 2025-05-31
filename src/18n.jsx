import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import uz from "./locales/uz.json"
import ru from "./locales/ru.json"


i18n
.use(I18nextBrowserLanguageDetector)
.use(initReactI18next)
.init({
    fallbackLng:'uz',
    debug:true,
    resources:{
        uz:{translation:uz},
        ru:{translation:ru}
    },
    detection:{
        order:['localStorage' ,'navigate'],
        caches:['localStorage']
    },
});
export default i18n;