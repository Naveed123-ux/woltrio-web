import Link from "next/link";
import { useState } from "react";
import appData from "@data/app.json";
import SplashCursor from "../../components/Cursor";

const DefaultHeader = ({ transparent, invert, extraClass }) => {
  const [toggle, setToggle] = useState(false);

  const navItems = appData.header.menu.map((item) => ({
    ...item,
    classes:
      item.children && item.children.length > 0 ? "mil-has-children" : "",
  }));

  return (
    <div
      className={`mil-top-panel${transparent ? " mil-transparent-nav" : ""}${
        !invert ? " mil-invert-nav" : ""
      } mil-animated ${extraClass ? extraClass : ""} bg-black`}
    >
      <SplashCursor />
      <div className="container">
        <Link href="/" legacyBehavior>
          <a className="mil-logo mil-scale-down-trigger mil-accent-trigger">
            <img
              src={appData.header.logo.image}
              alt="Logo"
              className="mil-logo-image"
            />
          </a>
        </Link>

        <div
          className={`mil-mobile-dropdown mil-menu-center ${
            toggle ? "mil-active" : ""
          }`}
        >
          <div id="swupTopbar" className="mil-top-bar-transition">
            <nav className="mil-dark-nav">
              <ul className="mil-inline-list mil-hidden-trigger">
                {navItems.map((item, key) => (
                  <li className={item.classes} key={`header-menu-item-${key}`}>
                    <Link href={item.link} className="mil-link">
                      {item.label}
                    </Link>

                    {/* Render dropdown only if it has children */}
                    {item.children && item.children.length > 0 && (
                      <ul className="mil-dropdown">
                        {item.children.map((child, cKey) => (
                          <li key={`child-${key}-${cKey}`}>
                            <Link href={child.link} className="mil-link">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <ul className="mil-social mil-hidden-trigger">
            <li>
              <Link href="/jobs" className="jobs-button">
                Join Us
              </Link>
            </li>
            {appData.social.map((item, key) => (
              <li key={`header-social-item-${key}`}>
                <a href={item.link} title={item.title} target="_blank">
                  <i className={item.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu button */}
        <div
          className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          <span />
        </div>
      </div>
    </div>
  );
};

export default DefaultHeader;
