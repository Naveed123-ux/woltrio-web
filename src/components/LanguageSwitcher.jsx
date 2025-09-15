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
    } else {
      // If no cookie exists, check if we're in a translated state
      const isTranslated =
        document.documentElement.classList.contains("translated-ltr") ||
        document.documentElement.classList.contains("translated-rtl");
      if (!isTranslated) {
        setCurrentLanguage("en");
      }
    }
  }, []);

  const switchLanguage = (lang) => () => {
    console.log(`Switching to language: ${lang}`);

    // Clear all Google Translate related storage
    try {
      // Clear localStorage
      Object.keys(window.localStorage).forEach((key) => {
        if (key.includes("google") || key.includes("translate")) {
          window.localStorage.removeItem(key);
        }
      });

      // Clear sessionStorage
      Object.keys(window.sessionStorage).forEach((key) => {
        if (key.includes("google") || key.includes("translate")) {
          window.sessionStorage.removeItem(key);
        }
      });
    } catch (e) {
      console.warn("Could not clear storage:", e);
    }

    // Destroy the old cookie completely
    destroyCookie(null, COOKIE_NAME, { path: "/" });
    destroyCookie(null, COOKIE_NAME, {
      path: "/",
      domain: window.location.hostname,
    });
    destroyCookie(null, COOKIE_NAME, {
      path: "/",
      domain: `.${window.location.hostname}`,
    });

    // Set the appropriate cookie value based on language
    let cookieValue;
    if (lang === "en") {
      // For English, we want to disable translation
      cookieValue = "/auto/en";
      // Alternative: you might want to not set any cookie for English
      // destroyCookie(null, COOKIE_NAME, { path: "/" });
    } else {
      cookieValue = `/auto/${lang}`;
    }

    // Set the new cookie
    setCookie(null, COOKIE_NAME, cookieValue, {
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60, // 30 days
    });

    // Update the state
    setCurrentLanguage(lang);

    // Force reload with cache bypass
    window.location.href = window.location.href;
  };

  const resetToEnglish = () => {
    console.log("Resetting to English");

    // Completely remove the cookie
    destroyCookie(null, COOKIE_NAME, { path: "/" });
    destroyCookie(null, COOKIE_NAME, {
      path: "/",
      domain: window.location.hostname,
    });
    destroyCookie(null, COOKIE_NAME, {
      path: "/",
      domain: `.${window.location.hostname}`,
    });

    // Clear all translation-related storage
    try {
      Object.keys(window.localStorage).forEach((key) => {
        if (key.includes("google") || key.includes("translate")) {
          window.localStorage.removeItem(key);
        }
      });
    } catch (e) {
      console.warn("Could not clear storage:", e);
    }

    // Remove any translation classes from the document
    document.documentElement.classList.remove(
      "translated-ltr",
      "translated-rtl"
    );

    setCurrentLanguage("en");

    // Reload the page
    window.location.href = window.location.href;
  };

  return (
    <div className="text-center notranslate my-3">
      <div className="btn-group" role="group" aria-label="Language Switcher">
        <button
          type="button"
          className={currentLanguage === "en" ? "selected" : "notselected"}
          onClick={
            currentLanguage === "en" ? resetToEnglish : switchLanguage("en")
          }
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

      {/* Debug info - remove in production */}
      <div className="mt-2 text-sm text-gray-500">
        Current: {currentLanguage}
      </div>
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
