import React from "react";
import useTextTranslate from "../../hooks/useTextTranslate.hook";

function Home() {
  return <h1> {useTextTranslate("Home", "HELLO")} </h1>;
}

export default Home;
