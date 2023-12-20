import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
       'Wel':'Welcome! Your current cash is 3000$'
        }
      },
      ar: {
        translation: {
          Home: 'الصفحة الرئيسة',
          Categories:'الفئات',
          Purchases:'المشتريات',
          About:'حول',
          'Contact Us':'الاتصال بنا',
          'Log in':'تسجيل الدخول',
          'Sign up':'إنشاء حساب',
          English:'الإنكليزية',
          Arabic:'العربية',
          'wel':'أهلا بك! نقديتك هي 3000$',
          'Discover the':'اسـتكـشـف',
          'fashion':'الـمـوضة',
          'Our Categories':'فئاتنا',
          'Goto clothes section':'الانتقال إلى قسم الألبسة',
          'Goto Shoes section':'الانتقال إلى قسم الأحذية',
          'Goto electronics section':'الانتقال إلى قسم الالكترونيات',
          "Have a":'لديك',
          " question": ' سؤال',
          'n inquire': ' استفسار',
          '?':'؟',
          "Contact Us<span id=\"mark\">!</span>":'اتصل بنا<span id=\"mark\">!</span>'
      
        }
      }
    
    },
    lng: "en",
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    returnObjects: true,
    parseMissingKeyHandler: (key) => key
  });

export default i18n;