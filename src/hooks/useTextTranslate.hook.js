/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import * as P from "prop-types";

const useTextTranslate = (componentString, textKey) => {
  const { t } = useTranslation();

  const textTranslated = t(`${componentString}.${textKey}`);

  return textTranslated;
};

export default useTextTranslate;

useTextTranslate.propType = {
  componentString: P.string.isRequired,
  textKey: P.string.isRequired,
};
