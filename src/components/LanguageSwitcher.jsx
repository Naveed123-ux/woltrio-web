"use client";
import { useEffect, useState } from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies";

const COOKIE_NAME = "googtrans";

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  useEffect(() => {
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        setCurrentLanguage(sp[2]);
      }
    }
  }, []);

  const switchLanguage = (lang) => () => {
    // Destroy the old cookie to prevent caching issues
    destroyCookie(null, COOKIE_NAME, { path: "/" });

    // Clear any Google Translate local storage to reset its state
    window.localStorage.removeItem("google.translate.element");

    // Set the new cookie with a secure flag for production
    setCookie(null, COOKIE_NAME, `/auto/${lang}`, { path: "/", secure: true });

    // Update the state immediately
    setCurrentLanguage(lang);

    // Reload the page to apply the translation
    window.location.reload();
  };

  return (
    <div className="text-center notranslate my-3">
      <div className="btn-group" role="group" aria-label="Language Switcher">
        <button
          type="button"
          className={currentLanguage === "en" ? "selected" : "notselected"}
          onClick={switchLanguage("en")}
        >
          En
        </button>

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
