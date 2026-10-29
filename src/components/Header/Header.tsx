import { useEffect, useState } from "react";
import "./Header.css";
import { profile } from "../../data/profile";
import Contact from "../Contact/Contact";
import { CloseIcon, MenuIcon } from "../Icons/Icons";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className={`header${isOpen ? " header_open" : ""}`}>
      <div className="header__inner">
        <a className="header__brand" href="#home" onClick={closeMenu}>
          {profile.name}
        </a>

        <button
          className="header__toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="header-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>

        <div className="header__menu" id="header-nav">
          <nav className="header__nav" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="header__link"
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="header__contact">
            <Contact />
          </div>
        </div>
      </div>
    </header>
  );
}
