import { messages as portugueseMessages } from "./pt";
import { messages as englishMessages } from "./en";
import { messages as espanishMessages } from "./es";

const messages = {
  en: {
    translations: {
      ...englishMessages,
    },
  },
  pt: {
    translations: {
      ...portugueseMessages,
    },
  },
  es: {
    translations: {
      ...espanishMessages,
    },
  },
};

export { messages };
