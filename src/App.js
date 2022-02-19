import React, { useEffect, useState } from "react";
import useTextTranslate from "./hooks/useTextTranslate.hook";

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
      <h1>{useTextTranslate("titles", "app")}</h1>
      <p>{useTextTranslate("messages", "itWorks")}</p>
      <button>{useTextTranslate("buttons", "save")}</button>
      <br />
      <br />
      <small>{useTextTranslate("messages", "itWosmallTextrks")}</small>
      <br />
      <br />
      <select onChange={handleSelectChange} value={language}>
        <option value="pt-BR">PT</option>
        <option value="en-US">EN</option>
        <option value="es-ES">ES</option>
      </select>
    </>
  );
};

export default App;
