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
    i18n.changeLanguage(value);
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
