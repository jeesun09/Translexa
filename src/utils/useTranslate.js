"use client";

import { useEffect, useState } from "react";

export default function useTranslate(sourceText, selectedLanguage) {
  const [targetText, setTargetText] = useState("");

  useEffect(() => {
    const handleTranslate = async (sourceText) => {
      try {
        const response = await fetch("/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sourceText, selectedLanguage }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setTargetText(data.translatedText);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    if (sourceText.trim() && sourceText.length > 1) {
      const timeoutId = setTimeout(() => {
        handleTranslate(sourceText);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [sourceText, selectedLanguage]);

  return targetText;
}
