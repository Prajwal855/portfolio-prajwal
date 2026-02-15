import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "navSummary": "Summary",
      "navSkills": "Skills",
      "navExperience": "Experience",
      "navProjects": "Projects",
      "navEducation": "Education",
      "navContact": "Contact",
      "language": "Language",
      "audioOn": "Music On",
      "audioOff": "Music Off",
    }
  },
  fr: {
    translation: {
      "navSummary": "Résumé",
      "navSkills": "Compétences",
      "navExperience": "Expérience",
      "navProjects": "Projets",
      "navEducation": "Éducation",
      "navContact": "Contact",
      "language": "Langue",
      "audioOn": "Musique Activée",
      "audioOff": "Musique Désactivée",
    }
  },
  de: {
    translation: {
      "navSummary": "Zusammenfassung",
      "navSkills": "Kompetenzen",
      "navExperience": "Erfahrung",
      "navProjects": "Projekte",
      "navEducation": "Ausbildung",
      "navContact": "Kontakt",
      "language": "Sprache",
      "audioOn": "Musik An",
      "audioOff": "Musik Aus",
    }
  },
  ru: {
    translation: {
      "navSummary": "Резюме",
      "navSkills": "Навыки",
      "navExperience": "Опыт",
      "navProjects": "Проекты",
      "navEducation": "Образование",
      "navContact": "Контакты",
      "language": "Язык",
      "audioOn": "Музыка Вкл",
      "audioOff": "Музыка Выкл",
    }
  },
  hi: {
    translation: {
      "navSummary": "सारांश",
      "navSkills": "कौशल",
      "navExperience": "अनुभव",
      "navProjects": "प्रोजेक्ट्स",
      "navEducation": "शिक्षा",
      "navContact": "संपर्क",
      "language": "भाषा",
      "audioOn": "म्यूजिक ऑन",
      "audioOff": "म्यूजिक ऑफ",
    }
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;
