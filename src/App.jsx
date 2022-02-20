import React, { useState } from "react";
import Home from "./Components/Home";
import { Conteiner, GlobalStyle } from "./global";

const I18N_STORAGE_KEY = "i18nextLng";

const App = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem(I18N_STORAGE_KEY)
  );

  const handleSelectChange = (event) => {
    setLanguage(event.target.value);
    console.log(event.target.value);

    localStorage.setItem(I18N_STORAGE_KEY, event.target.value);

    window.location = window.location;
  };

  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <Home />

        <br />
        <br />
        <select onChange={handleSelectChange} value={language}>
          <option value="pt-BR">PT</option>
          <option value="en-US">EN</option>
          <option value="es-ES">ES</option>
        </select>
      </Conteiner>
    </>
  );
};

export default App;
