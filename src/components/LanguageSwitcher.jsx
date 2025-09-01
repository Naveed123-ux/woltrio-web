"use client";
import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";

const COOKIE_NAME = "googtrans";

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  useEffect(() => {
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }

    if (!languageValue) {
      languageValue = "en"; // default to English
    }

    setCurrentLanguage(languageValue);
  }, []);

  const switchLanguage = (lang) => () => {
    setCookie(null, COOKIE_NAME, "/auto/" + lang);
    window.location.reload();
  };

  return (
    <div className="text-center notranslate my-3">
      <div className="btn-group" role="group" aria-label="Language Switcher">
        {/* English Button */}
        <button
          type="button"
          className={currentLanguage === "en" ? "selected" : "notselected"}
          onClick={switchLanguage("en")}
          disabled={currentLanguage === "en"}
        >
          En
        </button>

        {/* Chinese Button */}
        <button
          type="button"
          className={
            currentLanguage === "zh-CN" ? "selected ms-2" : "notselected ms-2"
          }
          onClick={switchLanguage("zh-CN")}
          disabled={currentLanguage === "zh-CN"}
        >
          中文
        </button>
      </div>
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
