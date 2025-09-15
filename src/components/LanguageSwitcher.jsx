"use client";

import { useState, useEffect } from "react";

const COOKIE_NAME = "googtrans";

/**
 * Reads the 'googtrans' cookie manually.
 * @returns {string} The current language code.
 */
const getCurrentLanguageFromCookie = () => {
  const cookieString = document.cookie;
  if (typeof cookieString !== "string") return "en";

  const cookies = cookieString.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === COOKIE_NAME) {
      const lang = value.split("/").pop();
      return lang || "en";
    }
  }
  return "en";
};

/**
 * Manually deletes a cookie by setting its expiration to the past.
 * The domain logic is crucial for robustness.
 */
const deleteCookie = (name) => {
  const hostname = window.location.hostname;
  const parts = hostname.split(".");
  // Attempt to delete the cookie on all possible subdomains
  while (parts.length > 1) {
    const currentDomain = parts.join(".");
    document.cookie = `${name}=; Path=/; Domain=${currentDomain}; Expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
    document.cookie = `${name}=; Path=/; Domain=.${currentDomain}; Expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
    parts.shift();
  }
  // Also delete without a specified domain
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
};

/**
 * Manually sets a cookie with a max-age.
 */
const setCookie = (name, value, maxAgeInSeconds) => {
  const expiration = `max-age=${maxAgeInSeconds}`;
  document.cookie = `${name}=${value}; Path=/; ${expiration};`;
};

const LanguageSwitcher = () => {
  // 1. Use useState to manage the current language state.
  const [currentLanguage, setCurrentLanguage] = useState("en");

  // 2. Use useEffect to read the cookie only on the client side after mounting.
  useEffect(() => {
    try {
      const lang = getCurrentLanguageFromCookie();
      setCurrentLanguage(lang);
    } catch (e) {
      // Graceful fallback for environments where 'document' is not available.
    }
  }, []); // The empty dependency array ensures this runs only once on mount.

  /**
   * Clears any existing 'googtrans' cookie and sets a new one.
   * @param {string} lang - The language code to switch to.
   */
  const handleLanguageChange = (lang) => {
    // 1. Delete all versions of the old cookie
    deleteCookie(COOKIE_NAME);

    // 2. Set the new cookie
    setCookie(COOKIE_NAME, `/auto/${lang}`, 30 * 24 * 60 * 60); // 30 days

    // 3. Reload the page to apply the new translation
    window.location.reload();
  };

  return (
    <div className="text-center notranslate my-3">
      <div className="btn-group" role="group" aria-label="Language Switcher">
        {/* English Button */}
        <button
          type="button"
          className={currentLanguage === "en" ? "selected" : "notselected"}
          onClick={() => handleLanguageChange("en")}
        >
          En
        </button>

        {/* Chinese Button */}
        <button
          type="button"
          className={
            currentLanguage === "zh-CN" ? "selected ms-2" : "notselected ms-2"
          }
          onClick={() => handleLanguageChange("zh-CN")}
        >
          中文
        </button>
      </div>

      {/* Optional: Debug info */}
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
