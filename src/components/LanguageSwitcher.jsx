"use client";
import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";

const COOKIE_NAME = "googtrans";

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  useEffect(() => {
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    // Check if the cookie exists and set the language
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        setCurrentLanguage(sp[2]);
      }
    }
  }, []); // Run only once on component mount

  const switchLanguage = (lang) => () => {
    // Set the cookie with the correct value
    setCookie(null, COOKIE_NAME, `/auto/${lang}`, { path: "/" });

    // Update the state immediately
    setCurrentLanguage(lang);

    // Reload the page to apply the translation
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
        >
          中文
        </button>
      </div>
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
