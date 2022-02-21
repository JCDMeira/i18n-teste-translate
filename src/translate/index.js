import { homePt, homeEn, homeEs, homeCh } from "../Components/Home/translate";

const messages = {
  en: {
    translation: {
      ...homeEn,
    },
  },
  pt: {
    translation: {
      ...homePt,
    },
  },
  es: {
    translation: {
      ...homeEs,
    },
  },
  zh: {
    translation: {
      ...homeCh,
    },
  },
};

export { messages };
