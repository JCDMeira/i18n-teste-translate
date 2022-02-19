/* eslint-disable no-unused-vars */
import { i18n } from "../translate/i18n";
import * as P from "prop-types";

const useTextTranslate = (componentString, textKey) => {
  const textTranslated = i18n.t(`${componentString}.${textKey}`);

  return textTranslated;
};

export default useTextTranslate;

useTextTranslate.propType = {
  componentString: P.string.isRequired,
  textKey: P.string.isRequired,
};
