import { homePt, homeEn, homeEs, homeCh } from "../Components/Home/translate";

const messages = {
  en: {
    translations: {
      ...homeEn,
    },
  },
  pt: {
    translations: {
      ...homePt,
    },
  },
  es: {
    translations: {
      ...homeEs,
    },
  },
  zh: {
    translations: {
      ...homeCh,
    },
  },
};

export { messages };
