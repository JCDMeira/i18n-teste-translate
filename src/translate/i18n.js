import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { messages } from "./index";

// const DETECTION_OPTIONS = {
//   order: ["navigator"],
// };

i18n
  .use(LanguageDetector)
  // .use(initReactI18next)
  .init({
    // detection: DETECTION_OPTIONS,
    debug: false,
    defaultNS: ["translations"],
    fallbackLng: "pt",
    ns: ["translations"],
    resources: messages,
  });

export { i18n };
