"use client";
import { getCookie, setCookie, deleteCookie } from "cookies-next/client";

const COOKIE_NAME = "googtrans";

/**
 * Reads the 'googtrans' cookie using cookies-next and returns the language code.
 * Defaults to 'en' if the cookie is not set.
 * @returns {string} The current language code.
 */
const getCurrentLanguageFromCookie = () => {
  const langCookie = getCookie(COOKIE_NAME);

  if (typeof langCookie === "string") {
    // Cookie value is '/auto/zh-CN', so we get the last part
    const lang = langCookie.split("/").pop();
    return lang || "en";
  }

  return "en";
};

const LanguageSwitcher = () => {
  // Read language from the cookie. Note: cookies-next docs recommend
  // calling this inside useEffect or an event handler. In this component's
  // case, since a page reload happens on every change, reading it here
  // on initial render is safe and reflects the correct state post-reload.
  const currentLanguage = getCurrentLanguageFromCookie();

  /**
   * Clears any existing 'googtrans' cookie and sets a new one.
   * @param {string} lang - The language code to switch to.
   */
  const handleLanguageChange = (lang) => {
    const hostname = window.location.hostname;
    const parts = hostname.split(".");

    // --- Definitive Fix: Robustly delete cookie across all parent domains ---
    // This loop ensures that any 'googtrans' cookie is deleted, regardless
    // of the subdomain it was set on (e.g., 'www.example.com' vs '.example.com').
    while (parts.length > 1) {
      const currentDomain = parts.join(".");
      deleteCookie(COOKIE_NAME, { path: "/", domain: currentDomain });
      deleteCookie(COOKIE_NAME, { path: "/", domain: `.${currentDomain}` });
      parts.shift();
    }
    // Finally, delete the cookie with no domain specified (browser default)
    deleteCookie(COOKIE_NAME, { path: "/" });
    // --- End of deletion logic ---

    // Set the new, authoritative cookie
    setCookie(COOKIE_NAME, `/auto/${lang}`, {
      path: "/",
      maxAge: 30 * 24 * 60 * 60, // 30 days
    });

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
      <div className="mt-2 text-sm text-gray-500">
        Current: {currentLanguage}
      </div>
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
