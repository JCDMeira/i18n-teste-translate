import React, { useState } from "react";
import Home from "./Components/Home";
import { Conteiner, GlobalStyle } from "./global";

import i18n from "i18next";
import I18N_STORAGE_KEY from "./utils/language-key";

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem(I18N_STORAGE_KEY || "pt-BR")
  );

  const handleSelectChange = ({ target: { value } }) => {
    localStorage.setItem(I18N_STORAGE_KEY, value);
    setLanguage(value);
    if (value === "pt-BR") i18n.changeLanguage("pt-BR");
    if (value === "en-US") i18n.changeLanguage("en-US");
    if (value === "es-ES") i18n.changeLanguage("es-ES");
    if (value === "zh-CN") i18n.changeLanguage("zh-CN");
  };

  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <h1>{language}</h1>
        <Home />

        <br />
        <br />
        <select onChange={handleSelectChange} value={language}>
          <option value="pt-BR">PT</option>
          <option value="en-US">EN</option>
          <option value="es-ES">ES</option>
          <option value="zh-CN">中文</option>
        </select>
      </Conteiner>
    </>
  );
}

export default App;
