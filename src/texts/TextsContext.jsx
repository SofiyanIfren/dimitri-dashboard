import React, { createContext, useContext, useState } from "react";
import texts_en from "./texts.en";
import texts_tr from "./texts.tr";

const TextsContext = createContext();

export function TextsProvider({ children }) {
  const [lang, setLang] = useState("en");

  let texts;
  switch (lang) {
    case "en":
      texts = texts_en;
      break;
    case "tr":
      texts = texts_tr;
      break;
    default:
      texts = texts_tr;
  }

  return (
    <TextsContext.Provider value={{ texts, lang, setLang }}>
      {children}
    </TextsContext.Provider>
  );
}

// Hook personnalisé pour utiliser facilement le contexte
export function useTexts() {
  return useContext(TextsContext);
}
